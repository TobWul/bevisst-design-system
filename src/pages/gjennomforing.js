import React from 'react'
import Grid from '../components/Grid'
import LargeChart from '../components/LargeChart'
import { yearLabels } from '../lib/helpers'

const Gjennomforing = () => {
  const sokere = {
    type: 'line',
    datasets: [
      {
        label: {
          name: 'Antall med studentstatus fullført',
          color: '#3083D5'
        },
        data: [1018, 1114, 1158, 1155, 1008, 722, 763]
      }
    ],
    x: yearLabels(2010, 2016)
  }
  const timeToFinish = {
    type: 'line',
    datasets: [
      {
        label: {
          name: 'Antal studenter med studentstatus fullført',
          color: '#3083D5'
        },
        data: [136, 151, 262, 74, 112, 33, 6, 4, 2]
      }
    ],
    x: yearLabels(1, 9).map(year => year + ' år')
  }
  const kandidatproduksjon = {
    type: 'line',
    datasets: [
      {
        label: {
          name: 'Antall kandidater',
          color: '#3083D5'
        },
        data: [748, 831, 504]
      }
    ],
    x: yearLabels(2017, 2019)
  }
  return (
    <>
      <Grid type={2}>
        <LargeChart
          data={sokere}
          title="Antall fullførte kandidater over tid (etter startår)"
        />
        <LargeChart
          data={timeToFinish}
          title="Hvor mange år brker studentene på å fullføre?"
        />
        <LargeChart
          data={kandidatproduksjon}
          title="Kandidatproduksjon total"
        />
      </Grid>
    </>
  )
}

export default Gjennomforing
