import React from 'react'
import Grid from '../components/Grid'
import LargeChart from '../components/LargeChart'
import { yearLabels } from '../lib/helpers'

const Studiebarometeret = () => {
  const totalSatisfaction = {
    type: 'line',
    datasets: [
      {
        label: {
          name: '2. studieår',
          color: '#3083D5'
        },
        data: [4.08, 4.13, 4.02, 3.94, 4.01, 4.02]
      },
      {
        label: {
          name: '5. studieår',
          color: '#8B3688'
        },
        data: [4.57, 4.25, 4.23, 4.0, 4.28, 4.42]
      }
    ],
    x: yearLabels(2014, 2019)
  }
  const desiredStudyProgram = {
    type: 'line',
    datasets: [
      {
        label: {
          name: '2. studieår',
          color: '#3083D5'
        },
        data: [4.3, 4.4, 4.19, 4.29, 4.27, 4.39]
      },
      {
        label: {
          name: '5. studieår',
          color: '#8B3688'
        },
        data: [4.74, 4.65, 4.67, 4.6, 4.6, 4.66]
      }
    ],
    x: yearLabels(2014, 2019)
  }

  const timeUsed = {
    type: 'bar',
    datasets: [
      {
        label: {
          name: '2. studieår',
          color: '#8B3688'
        },
        data: [14.32, 13.73, 14.08, 12.44, 11.59, 12.64]
      },
      {
        label: {
          name: '5. studieår',
          color: '#3083D5'
        },
        data: [23.81, 23.29, 23.46, 24.06, 23.84, 22.81]
      }
    ],
    x: yearLabels(2014, 2019)
  }
  const indexes = {
    type: 'bar',
    datasets: [
      {
        label: {
          name: '2. studieår',
          color: '#8B3688'
        },
        data: [14.32, 13.73, 14.08, 12.44, 11.59, 12.64]
      },
      {
        label: {
          name: '5. studieår',
          color: '#3083D5'
        },
        data: [23.81, 23.29, 23.46, 24.06, 23.84, 22.81]
      }
    ],
    x: yearLabels(2014, 2019)
  }
  return (
    <>
      <Grid type={2}>
        <LargeChart data={totalSatisfaction} title="Alt i alt tilfredshet" />
        <LargeChart
          data={desiredStudyProgram}
          title="Går på studieprogrammet jeg helst vil gå på"
        />
        <LargeChart
          data={timeUsed}
          title="Gjennomsnittlig tidsbruk organisert aktivitet og egeninnsats"
        />
        {/* <LargeChart data={indexes} title="Indekser" /> */}
      </Grid>
    </>
  )
}

export default Studiebarometeret
