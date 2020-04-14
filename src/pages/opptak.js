import React from 'react'
import Grid from '../components/Grid'
import LargeChart from '../components/LargeChart'

const Opptak = () => {
  const totalApplicants = {
    type: 'line',
    datasets: [
      {
        label: {
          name: 'Antall lokale søkere',
          color: '#3083D5'
        },
        data: [5027, 4933, 4661]
      }
    ],
    x: [2017, 2018, 2019]
  }
  const primaryApplicants = {
    type: 'line',
    datasets: [
      {
        label: {
          name: 'Antall lokale primærsøkere',
          color: '#3083D5'
        },
        data: [3051, 2728, 2680]
      }
    ],
    x: [2017, 2018, 2019]
  }
  const localApplicantsMasters = {
    type: 'line',
    datasets: [
      {
        label: {
          name: 'Jenter',
          color: '#3083D5'
        },
        data: [4454, 4329, 3994]
      }
    ],
    x: [2017, 2018, 2019]
  }
  const masters = {
    type: 'line',
    datasets: [
      {
        label: {
          name: 'Jenter',
          color: '#3083D5'
        },
        data: [2508, 2153, 2059]
      }
    ],
    x: [2017, 2018, 2019]
  }
  return (
    <>
      <Grid type={1}>
        <LargeChart
          data={totalApplicants}
          title="Utvikling i totalt antall lokale søkere over tid"
        />
        <LargeChart
          data={primaryApplicants}
          title="Utvikling i antall lokale primærsøkere per opptaksår"
        />
        <LargeChart
          data={localApplicantsMasters}
          title="Utvikling i antall lokale søkere på 2-årig Mastergrad over tid"
        />
        <LargeChart
          data={masters}
          title="Utvikling i antall lokale primærsøkere på 2-årig Mastergrad per opptaksår"
        />
      </Grid>
    </>
  )
}

export default Opptak
