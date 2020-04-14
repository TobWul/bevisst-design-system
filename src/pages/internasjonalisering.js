import React from 'react'
import Grid from '../components/Grid'
import LargeChart from '../components/LargeChart'
import { yearLabels } from '../lib/helpers'

const Internasjonalisering = () => {
  const sokere = {
    type: 'bar',
    datasets: [
      {
        label: {
          name: 'Vår',
          color: '#3083D5'
        },
        data: [239, 235, 242, 185]
      },
      {
        label: {
          name: 'Høst',
          color: '#8B3688'
        },
        data: [117, 171, 207, 0]
      }
    ],
    x: yearLabels(2016, 2019)
  }
  const primary = {
    type: 'bar',
    datasets: [
      {
        label: {
          name: 'Vår',
          color: '#3083D5'
        },
        data: [46, 53, 40, 23]
      },
      {
        label: {
          name: 'Høsts',
          color: '#8B3688'
        },
        data: [15, 16, 22, 0]
      }
    ],
    x: yearLabels(2016, 2019)
  }
  const topCountries = {
    type: 'bar',
    datasets: [
      {
        label: {
          name: 'Land',
          color: '#3083D5'
        },
        data: [259, 195, 103, 77, 70, 58, 54, 53, 51, 48]
      }
    ],
    x: [
      'Australia',
      'USA',
      'Spania',
      'Italia',
      'Tyskland',
      'Danmark',
      'Frankrike',
      'Sør-Afrika',
      'Storbritania og Nord-Irland',
      'Portugal'
    ]
  }
  const antallUtenlandskeStudenter = {
    type: 'bar',
    datasets: [
      {
        label: {
          name: 'x',
          color: '#8B3688'
        },
        data: [200, 178, 221, 0]
      },
      {
        label: {
          name: 'y',
          color: '#CC8744'
        },
        data: [0, 0, 0, 184]
      },
      {
        label: {
          name: 'z',
          color: '#3083D5'
        },
        data: [223, 279, 302, 0]
      },
      {
        label: {
          name: 'a',
          color: '#6AB444'
        },
        data: [0, 0, 0, 268]
      }
    ],
    x: yearLabels(2016, 2019)
  }
  return (
    <>
      <Grid type={1}>
        <LargeChart data={sokere} title="Antall utvekslingsopphold" />
        <LargeChart data={primary} title="Antall utreisende på Erasmus+" />
        <LargeChart
          data={topCountries}
          title="Topp and for utreisende 2018 hele NTNU"
        />
        <LargeChart
          data={antallUtenlandskeStudenter}
          title="Antall utenlandske studenter"
        />
      </Grid>
    </>
  )
}

export default Internasjonalisering
