import React from 'react'
import PropTypes from 'prop-types'
import styles from './typography.module.scss'

export const Heading1 = ({ children }) => (
  <h1 className={styles.heading1}>{children}</h1>
)
export const Heading2 = ({ children }) => (
  <h2 className={styles.heading2}>{children}</h2>
)
export const Heading3 = ({ children }) => (
  <h3 className={styles.heading3}>{children}</h3>
)
export const Heading4 = ({ children }) => (
  <h4 className={styles.heading4}>{children}</h4>
)
export const Subtitle1 = ({ children }) => (
  <h5 className={styles.subtitle1}>{children}</h5>
)
export const Subtitle2 = ({ children }) => (
  <h6 className={styles.subtitle2}>{children}</h6>
)
export const Body1 = ({ children }) => (
  <p className={styles.body1}>{children}</p>
)
export const Body2 = ({ children }) => (
  <p className={styles.body2}>{children}</p>
)
export const Caption = ({ children }) => (
  <p className={styles.caption}>{children}</p>
)
export const Overline = ({ children }) => (
  <p className={styles.overline}>{children}</p>
)
export const ButtonText = ({ children }) => (
  <p className={styles.buttonText}>{children}</p>
)

const typographyPropTypes = {
  children: PropTypes.any.isRequired
}

Heading1.propTypes = typographyPropTypes
Heading2.propTypes = typographyPropTypes
Heading3.propTypes = typographyPropTypes
Heading4.propTypes = typographyPropTypes
Subtitle1.propTypes = typographyPropTypes
Subtitle2.propTypes = typographyPropTypes
Body1.propTypes = typographyPropTypes
Body2.propTypes = typographyPropTypes
Caption.propTypes = typographyPropTypes
Overline.propTypes = typographyPropTypes
