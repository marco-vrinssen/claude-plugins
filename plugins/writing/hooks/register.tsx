import { atom, read, update } from 'claude-code'
import type { EngineInterface, Register } from 'claude-code'

const isActive = atom({ plugin: 'writing', key: 'isActive' } as const, false)
const language = atom({ plugin: 'writing', key: 'language' } as const, '')
const isPicking = atom({ plugin: 'writing', key: 'isPicking' } as const, false)

// The empty value keeps the input's language.
export const LANGUAGES = [
  { value: '', label: 'Same' },
  { value: '-en', label: 'English' },
  { value: '-de', label: 'German' },
  { value: '-fr', label: 'French' },
  { value: '-es', label: 'Spanish' },
  { value: '-it', label: 'Italian' },
  { value: '-nl', label: 'Dutch' },
  { value: '-ru', label: 'Russian' },
  { value: '-ko', label: 'Korean' },
]

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
  const flags = [flag, await read($, language)].filter(Boolean).join(' ')
  const draft = (await $.prompt.read()).text.trim()
  await $.prompt.submit({ text: draft ? `${flags} ${draft}` : flags, asUser: true })

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
    const lang = await read($, language)
    const isOpen = await read($, isPicking)
    const current = LANGUAGES.find(({ value }) => value === lang)?.label ?? 'Same'

    // Picking a language swaps the flag buttons for one button per language.
    const pick = async (value: string) => {
      await update($, language, () => value)
      await update($, isPicking, () => false)
    }

    return (
      <Box flexDirection="row" flexWrap="wrap" columnGap={2} rowGap="sm">
        {isOpen
          ? LANGUAGES.map(({ value, label }) => (
              <Button key={`lang${value}`} label={label} variant={value === lang ? 'primary' : undefined} onPress={() => pick(value)} />
            ))
          : FLAGS.map(([flag, label]) => <Button key={flag} label={label} onPress={() => apply($, flag)} />)}
        <Box flexGrow={1} />
        <Button key="language" label={`Language: ${current}`} onPress={() => update($, isPicking, open => !open)} />
        <Button key="hide" role="dismiss" plain dimColor label="Hide" onPress={() => update($, isActive, () => false)} />
      </Box>
    )
  }).catch(($, e, next) => next(e))
}
