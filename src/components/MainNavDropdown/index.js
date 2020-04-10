import React from 'react'
import styles from './MainNavDropdown.module.scss'
import { Caption, Subtitle1 } from '../Typography'

const MainNavDropdown = () => {
  return (
    <div className={styles.wrapper}>
      <Caption>Ledelse</Caption>
      <Subtitle1>Mitt studieprogram</Subtitle1>
    </div>
  )
}

export default MainNavDropdown
