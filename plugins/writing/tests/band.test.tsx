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
  await ui.press({ key: '-sh' })
  expect(sent).toEqual(['-sh kannst du mir die zahlen schicken'])
  expect(draft).toBe('')

  await ui.press({ key: '-t' })
  expect(sent[1]).toBe('-t')

  await ui.select({ key: 'language', value: '-ko' })
  await ui.select({ key: 'language', value: '-en' })
  draft = 'hallo'
  await ui.press({ key: '-w' })
  expect(sent[2]).toBe('-w -en hallo')

  const desktop = await $.ui.mount({ ...BAND, surface: 'desktop' })
  expect((await desktop.find({ key: '-c' }))?.text).toBe('Correct')
  expect((await desktop.find({ key: '-su' }))?.text).toBe('Summarize')
  await desktop.unmount()
  await ui.unmount()
})
