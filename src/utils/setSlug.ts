import slugify from 'react-slugify'

export function setSlug(list: any[], placeholder: string) {
  const listPlaceholder = list.filter(
    (el) => el && slugify(el.label) === slugify(placeholder)
  )
  const listSize = listPlaceholder.length
  if (listSize > 1) {
    const lastSlugUsed = listPlaceholder[listSize - 1]
    const getNumberFromSlug = +lastSlugUsed.id.split('-')[1]
    return `${placeholder}-${getNumberFromSlug + 1}`
  } else {
    return `${placeholder}-${listSize + 1}`
  }
}