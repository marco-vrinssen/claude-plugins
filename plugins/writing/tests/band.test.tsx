import { expect, test } from 'claude-code/testing'

const BAND = {
  plugin: 'writing',
  component: 'AbovePrompt',
  surface: 'terminal',
  props: {
    hasSurvey: false,
    isWorking: false,
    maxRows: 20,
    bodyColumns: 80,
    scroll: { offset: 0, bodyRows: 20 },
    view: {},
  },
} as const

test('the band shows after /writing and sends the draft with the flag', async ($, on) => {
  let draft = 'kannst du mir die zahlen schicken'
  const sent: string[] = []
  on('ui.render', ($, e) => {
    const { Text } = $.ui.resolve(e)

    return <Text>engine</Text>
  })
  on('command.run', () => ({ text: '' }))
  on('prompt.read', () => ({ value: { text: draft, cursor: 0 } }))
  on('prompt.submit', (_, e) => {
    sent.push(e.text)

    return { text: e.text }
  })
  on('prompt.fill', (_, e) => {
    draft = e.text

    return { isFilled: true }
  })

  const before = await $.ui.mount(BAND)
  expect((await before.find({ type: 'Text' }))?.text).toBe('engine')
  await before.unmount()

  await $.command.run({ command: 'writing', args: '', origin: { kind: 'composer' }, presentation: { isFullscreen: false, columns: 80 } })
  const ui = await $.ui.mount(BAND)
  await ui.press({ key: '-o' })
  expect(sent).toEqual(['-o kannst du mir die zahlen schicken'])
  expect(draft).toBe('')

  await ui.press({ key: '-t' })
  expect(sent[1]).toBe('-t')

  await ui.press({ key: 'hide' })
  expect((await ui.find({ type: 'Text' }))?.text).toBe('engine')
  await ui.unmount()
})
