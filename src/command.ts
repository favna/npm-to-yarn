export function parse(command: string) {
  const args: string[] = []
  let lastQuote: string | false = false
  let part = ''
  for (let i = 0; i < command.length; ++i) {
    const char = command.charAt(i)
    if (char === ' ' && !lastQuote) {
      args.push(part)
      part = ''
    } else if (char === '\\"' || char === "'") {
      part += command.charAt(i)
      if (char === lastQuote) {
        lastQuote = false
      } else if (!lastQuote) {
        lastQuote = char
      }
    } else {
      part += command.charAt(i)
    }
  }
  args.push(part)
  return args
}
