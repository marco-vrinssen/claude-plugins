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
  ['-f', 'Warm'],
  ['-sum', 'Summarize'],
  ['-s', 'Shorten'],
  ['-h', 'Humanize'],
  ['-l', 'List'],
  ['-p', 'Prompt'],
  ['-pp', 'Prompt (Enhanced)'],
  ['-ip', 'Prompt (Image)'],
  ['-sp', 'Prompt (Security)'],
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

    // A desktop button spills 4px past its row on each side, so the row gap is one step larger.
    return (
      <Box flexDirection="row" flexWrap="wrap" columnGap="xs" rowGap="md">
        {FLAGS.map(([flag, label]) => (
          <Button key={flag} label={label} onPress={() => apply($, flag)} />
        ))}
        <Select key="language" label="Response Language" options={LANGUAGES} value={lang} onSelect={value => update($, language, () => value)} />
      </Box>
    )
  }).catch(($, e, next) => next(e))
}
