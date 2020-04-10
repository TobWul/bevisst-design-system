import React from 'react'
import Grid from '../components/Grid'
import LargeChart from '../components/LargeChart'

const Studiebarometeret = () => {
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
    <>
      <Grid type={3}>
        <LargeChart data={sokere} title="totalt antall søkere over tid" />
        <LargeChart data={primary} title="antall primærsøkere per opptaksår" />
        <LargeChart
          data={gender}
          title="Kjønnsofordeling for primærsøkere over tid"
        />
        <LargeChart
          data={gender}
          title="Kjønnsofordeling for primærsøkere over tid"
        />
      </Grid>
    </>
  )
}

export default Studiebarometeret
