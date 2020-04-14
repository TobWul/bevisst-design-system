export const randomString = length =>
  Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substr(0, length)

export const cn = (...classes) => classes.join(' ')

export const yearLabels = (startYear, endYear) => {
  const years = []
  for (let i = startYear; i < endYear + 1; i++) {
    years.push(i)
  }
  return years
}
