import slugify from 'react-slugify'

export function setSlug(list: any[], placeholder: string) {
  const listPlaceholder = list.filter(
    (el) => slugify(el.label) === slugify(placeholder)
  )
  const listSize = listPlaceholder.length + 1
  return `${placeholder}-${listSize}`
}
