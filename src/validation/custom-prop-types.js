const standardString = (props, propName, componentName) =>
  `Invalid prop ${propName} [${props[propName]}] supplied to <${componentName}>. `

export const PropTypePx = (props, propName, componentName) => {
  if (!/px$/.test(props[propName])) {
    return new Error(
      standardString(propName, componentName) + 'Must be px value'
    )
  }
}

export const PropTypeHex = (props, propName, componentName) => {
  if (
    !/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^(var)(.*?\)$)/.test(props[propName])
  ) {
    return new Error(
      standardString(props, propName, componentName) +
        'Must be a hex value or css variable.'
    )
  }
}
