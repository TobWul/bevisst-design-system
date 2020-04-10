import React from 'react'
import { useEffect } from 'react'
import { randomString } from '../../lib/helpers'
import Chart from 'chart.js'

const ChartConstructor = ({ data }) => {
  const lineStyle = color => ({
    borderColor: color,
    backgroundColor: 'transparent'
  })
  const barStyle = color => ({
    backgroundColor: color
  })
  const style = color =>
    data.type === 'line' ? lineStyle(color) : barStyle(color)

  const datasets = data.datasets.map(set => ({
    label: set.label.name,
    data: set.data,
    ...style(set.label.color)
  }))

  const id = 'chart' + randomString()
  const type = data.type === 'stacked' ? 'bar' : data.type

  useEffect(() => {
    const ctx = document.getElementById(id).getContext('2d')
    const chart = new Chart(ctx, {
      type: type,
      responsive: true,
      maintainAspectRatio: false,
      data: {
        labels: data.x,
        datasets: datasets
      },
      options: {
        defaultFontFamily: "'Inter', sans-serif",
        defaultFontColor: '#A3A3A3',
        scales: {
          xAxes: [
            {
              stacked: data.type === 'stacked',
              gridLines: { color: '#F0F0F0' },
              ticks: {
                fontFamily: "'Inter', sans-serif",
                fontColor: '#A3A3A3'
              }
            }
          ],
          yAxes: [
            {
              stacked: data.type === 'stacked',
              gridLines: { color: '#F0F0F0' },
              ticks: {
                fontFamily: "'Inter', sans-serif",
                fontColor: '#A3A3A3'
              }
            }
          ]
        },
        legend: {
          display: false
        }
      }
    })
  }, [])
  return <canvas id={id} height="100%" style={{ marginTop: '1rem' }} />
}

export default ChartConstructor
