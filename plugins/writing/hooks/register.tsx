import { atom, read, update } from 'claude-code'
import type { EngineInterface, Register } from 'claude-code'

const isActive = atom({ plugin: 'writing', key: 'isActive' } as const, false)
const language = atom({ plugin: 'writing', key: 'language' } as const, '')

// The empty value keeps the input's language.
export const LANGUAGES = [
  { value: '', label: 'Original' },
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
  ['-c', 'Correct'],
  ['-t', 'Translate'],
  ['-o', 'Sharpen'],
  ['-e', 'Eloquent'],
  ['-f', 'Friendly'],
  ['-s', 'Shorten'],
  ['-l', 'List'],
  ['-h', 'Humanize'],
  ['-pp', 'Prompt (Enhanced)'],
  ['-ip', 'Image prompt'],
  ['-sp', 'Security prompt'],
  ['-p', 'Prompt'],
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
    // Only the terminal and desktop draw a Select.
    if (e.props.hasSurvey || (e.surface !== 'terminal' && e.surface !== 'desktop') || !(await read($, isActive))) return next(e)

    const { Box, Button, Select } = $.ui.resolve(e)
    const lang = await read($, language)

    // A desktop button needs two lines, which leave 12px between rows with no row gap.
    const height = e.surface === 'desktop' ? 2 : 1

    return (
      <Box flexDirection="row" flexWrap="wrap" columnGap="xs">
        {FLAGS.map(([flag, label]) => (
          <Box key={flag} height={height}>
            <Button key={flag} label={label} onPress={() => apply($, flag)} />
          </Box>
        ))}
        <Box key="language" height={height}>
          <Select key="language" label="Language" options={LANGUAGES} value={lang} onSelect={value => update($, language, () => value)} />
        </Box>
      </Box>
    )
  }).catch(($, e, next) => next(e))
}
