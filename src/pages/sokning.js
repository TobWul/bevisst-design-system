import React from 'react'
import LargeChart from '../components/LargeChart'
import Grid from '../components/Grid'

const Sokning = () => {
  const sokere = {
    type: 'line',
    datasets: [
      {
        label: {
          name: 'Jenter',
          color: '#3083D5'
        },
        data: [3800, 5500, 6000, 4500, 5300, 6300, 7200, 8100]
      },
      {
        label: {
          name: 'Gutter',
          color: '#8B3688'
        },
        data: [4500, 4500, 3000, 2500, 4300, 3300, 2200, 5100]
      }
    ],
    x: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
  }
  const primary = {
    type: 'line',
    datasets: [
      {
        label: {
          name: 'Jenter',
          color: '#3083D5'
        },
        data: [3800, 5500, 6000, 4500, 5300, 6300, 7200, 8100]
      },
      {
        label: {
          name: 'Gutter',
          color: '#8B3688'
        },
        data: [4500, 4500, 3000, 2500, 4300, 3300, 2200, 5100]
      }
    ],
    x: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
  }
  const gender = {
    type: 'stacked',
    datasets: [
      {
        label: {
          name: 'Gutter',
          color: '#8B3688'
        },
        data: [4500, 4500, 3000, 2500, 4300, 3300, 2200, 5100]
      },
      {
        label: {
          name: 'Jenter',
          color: '#3083D5'
        },
        data: [3800, 5500, 6000, 4500, 5300, 6300, 7200, 8100]
      }
    ],
    x: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
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
        data={sokere}
        title="andel primærsøkere av møtte studenter over tid"
      />
    </Grid>
  )
}

export default Sokning
