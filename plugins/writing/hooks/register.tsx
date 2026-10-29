import { atom, read, update } from 'claude-code'
import type { EngineInterface, Register } from 'claude-code'

const isActive = atom({ plugin: 'writing', key: 'isActive' } as const, false)

export const FLAGS = [
  ['-c', 'Fix'],
  ['-t', 'Translate'],
  ['-o', 'Sharpen'],
  ['-e', 'Eloquent'],
  ['-f', 'Friendly'],
  ['-s', 'Shorten'],
  ['-l', 'List'],
  ['-h', 'Humanize'],
  ['-p', 'Prompt'],
  ['-pp', 'Prompt pro'],
  ['-ip', 'Image prompt'],
  ['-sp', 'Security prompt'],
] as const

// Sends the draft with the flag, or the bare flag to rework the last output.
async function apply($: EngineInterface, flag: string) {
  const draft = (await $.prompt.read()).text.trim()
  await $.prompt.submit({ text: draft ? `${flag} ${draft}` : flag, asUser: true })

  // Clears the box only if it still holds what was sent, so nothing typed since is lost.
  if (draft && (await $.prompt.read()).text.trim() === draft) {
    await $.prompt.fill({ text: '', mode: 'replace' })
  }
}

export const register: Register = on => {
  on('command.run', async ($, e, next) => {
    if (/^(writing:)?writing$/.test(e.command)) await update($, isActive, () => true)

    return next(e)
  }).catch(($, e, next) => next(e))

  on('ui.render', { component: 'AbovePrompt' }, async ($, e, next) => {
    if (e.props.hasSurvey || !(await read($, isActive))) return next(e)

    const { Box, Button } = $.ui.resolve(e)

    return (
      <Box flexDirection="row" flexWrap="wrap" columnGap={1}>
        {FLAGS.map(([flag, label]) => (
          <Button key={flag} plain label={label} onPress={() => apply($, flag)} />
        ))}
        <Box flexGrow={1} />
        <Button key="hide" plain dimColor label="Hide" onPress={() => update($, isActive, () => false)} />
      </Box>
    )
  }).catch(($, e, next) => next(e))
}
