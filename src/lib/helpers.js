export const randomString = length =>
  Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substr(0, length)

export const cn = (...classes) => classes.join(' ')
