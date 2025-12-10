const formattedDate = (rawDate: string): string | undefined => {
  if (!rawDate) return undefined

  if (typeof rawDate === 'string' && rawDate.includes('/')) {
    return rawDate.split('/').reverse().join('-')
  }

  return undefined
}

export default formattedDate
