import React from 'react'
import Card from '../Card'
import ChartLabel from '../ChartLabel'
import Chart from '../Chart'
import { Subtitle1 } from '../Typography'
import CalculateDropdown from '../CalculateDropdown'
import styles from './LargeChart.module.scss'

const LargeChart = ({ data, title }) => {
  console.log(data.datasets[0].data)

  const calculationData =
    data.datasets.length > 1
      ? [].concat.apply(
          [],
          data.datasets.map(d => d.data)
        )
      : data.datasets[0].data

  return (
    <Card className={styles.wrapper}>
      <Subtitle1>{title}</Subtitle1>
      <CalculateDropdown data={calculationData} />
      {data.datasets.map(({ label }) => (
        <ChartLabel color={label.color} name={label.name} />
      ))}
      <Chart data={data} />
    </Card>
  )
}

export default LargeChart
