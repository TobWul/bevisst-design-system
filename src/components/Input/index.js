import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.scss'
import { randomString, cn } from '../../lib/helpers'
import textStyles from '../Typography/typography.module.scss'

const Input = ({
  type,
  placeholder,
  label,
  errorMessage,
  isError,
  required,
  onChange,
  value,
  disabled
}) => {
  placeholder = placeholder || label
  const id = `input-id-${randomString(10)}`

  const inputProps = {
    id,
    type,
    onChange,
    placeholder,
    disabled,
    value,
    className: cn(styles.input, textStyles.body2, isError && styles.error)
  }

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={cn(styles.label, textStyles.body2)}>
        {label}
        {required && <span>*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea {...inputProps} />
      ) : (
        <input {...inputProps} />
      )}
      {isError && errorMessage && (
        <p className={cn(styles.errorMessage, textStyles.caption)}>
          {errorMessage}
        </p>
      )}
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.oneOf([
    'text',
    'number',
    'email',
    'password',
    'tel',
    'text',
    'url'
  ]),
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  required: PropTypes.bool,
  isError: PropTypes.bool
}

export default Input
