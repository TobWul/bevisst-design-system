import React from 'react'
import styles from './Grid.module.scss'
import { cn } from '../../lib/helpers'
const Grid = ({ children, type }) => {
  return (
    <div className={cn(styles.grid, styles[`grid${type}`])}>{children}</div>
  )
}

export default Grid
