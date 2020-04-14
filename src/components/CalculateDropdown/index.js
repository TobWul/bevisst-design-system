import React, { useState } from 'react'
import styles from './CalculateDropdown.module.scss'

function getAvg(data) {
  const total = data.reduce((sum, number) => sum + number)
  return (total / data.length).toFixed(2)
}
function median(values) {
  if (values.length === 0) return 0

  values.sort(function(a, b) {
    return a - b
  })

  var half = Math.floor(values.length / 2)

  if (values.length % 2) return values[half]

  return (values[half - 1] + values[half]) / 2.0
}

const CalculateDropdown = ({ data }) => {
  const [result, setResult] = useState(getAvg(data))

  const handleChange = e => {
    e.target.value === 'average'
      ? setResult(getAvg(data))
      : setResult(median(data))
  }
  return (
    <div>
      <select className={styles.dropdown} onChange={handleChange}>
        <option value="average">Gjennomsnitt</option>
        <option value="median">Median</option>
      </select>
      <span>: {result}</span>
    </div>
  )
}

export default CalculateDropdown
