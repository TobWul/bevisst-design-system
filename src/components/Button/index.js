import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import styles from './Button.module.scss'
import { cn } from '../../lib/helpers'

const Button = ({ children, icon, onClick, type, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={cn(styles.button, styles[type])}
      disabled={disabled}
    >
      {icon && <Icon symbol={icon} />}
      {children}
    </button>
  )
}

Button.types = ['primary', 'normal', 'danger', 'danger-outline', 'tertiary']

Button.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.string,
  type: PropTypes.oneOf(Button.types)
}

Button.defaultProps = {
  type: Button.types[0]
}

export default Button
