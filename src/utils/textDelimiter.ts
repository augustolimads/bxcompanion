export function textDelimiter(text: string, limit: number) {
  const textLength = text.length
  if (textLength > limit) {
    const slicedText = text.slice(0, limit)
    return slicedText+'...'
  }
  return text
}
