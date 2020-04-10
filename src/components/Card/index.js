import React from 'react'
import styles from './Card.module.scss'
import { cn } from '../../lib/helpers'

const Card = ({ children, className }) => {
  return <div className={cn(styles.card, className)}>{children}</div>
}

export default Card
