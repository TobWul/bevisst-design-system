import React from 'react'
import LargeChart from '../components/LargeChart'
import Grid from '../components/Grid'

const Sokning = () => {
  const sokere = {
    type: 'line',
    datasets: [
      {
        label: {
          name: 'Antall søkere',
          color: '#3083D5'
        },
        data: [12714, 13516, 14984]
      }
    ],
    x: [2017, 2018, 2019]
  }
  const primary = {
    type: 'line',
    datasets: [
      {
        label: {
          name: 'Antall primærsøkere',
          color: '#3083D5'
        },
        data: [2667, 3089, 3336]
      }
    ],
    x: [2017, 2018, 2019]
  }
  const gender = {
    type: 'stacked',
    datasets: [
      {
        label: {
          name: 'Jenter',
          color: '#8B3688'
        },
        data: [21, 26, 30]
      },
      {
        label: {
          name: 'Gutter',
          color: '#3083D5'
        },
        data: [79, 74, 70]
      }
    ],
    x: [2017, 2018, 2019]
  }
  const andel = {
    type: 'line',
    datasets: [
      {
        label: {
          name: 'Andel primærsøkere av møtte studenter over tid',
          color: '#3083D5'
        },
        data: [79, 74, 70]
      }
    ],
    x: [2017, 2018, 2019]
  }
  return (
    <Grid>
      <LargeChart data={sokere} title="totalt antall søkere over tid" />
      <LargeChart data={primary} title="antall primærsøkere per opptaksår" />
      <LargeChart
        data={gender}
        title="Kjønnsofordeling for primærsøkere over tid"
      />
      <LargeChart
        type="line"
        data={andel}
        title="andel primærsøkere av møtte studenter over tid"
      />
    </Grid>
  )
}

export default Sokning
