import React from 'react'
import { Caption } from '../Typography'
import styles from './ChartLabel.module.scss'

const ChartLabel = ({ color, name }) => {
  return (
    <div className={styles.label}>
      <div className={styles.color} style={{ background: color }} />
      <Caption>{name}</Caption>
    </div>
  )
}

ChartLabel.defaultProps = {
  name: 'Label',
  color: '#b461a9'
}

export default ChartLabel
