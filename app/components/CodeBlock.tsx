import { CodeBlock, SupportedLanguages } from '@atlaskit/code';

function CustomCodeBlock({ language, code }: { code: string, language: string }) {
  const linesToHighlight = code
    .split('\n')
    .map((line, index) => [line, index] as [string, number])
    .filter(([line]) => line.includes('/* highlight */'))
    .map(([, number]) => number + 1)
    .join(',')
  const text = code.replace(/\/\* highlight \*\//g, '')

  // HACK: Required for code block styles.
  if(typeof window === 'undefined') {
    return (
      null
    )
  }

  // TODO: Move to code-surfer/standalone
  return (
    <CodeBlock
      text={text}
      language={language as SupportedLanguages}
      highlight={linesToHighlight}
    />
  )
}

export {
  CustomCodeBlock as CodeBlock
}