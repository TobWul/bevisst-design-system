import React from 'react'
import { withKnobs, text, select, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import iconlib from '../Icon/iconlib'
import Button from '.'

export default {
  title: 'Button',
  decorators: [withKnobs],
  component: Button,
  excludeStories: /.*Data$/
}

const buttonData = {
  onClick: action('Button clicked')
}

const iconData = [...Object.keys(iconlib), null]

export const allButtons = () => (
  <>
    <Button type="primary" {...buttonData}>
      Primary
    </Button>
    <Button type="normal" {...buttonData}>
      normal
    </Button>
    <Button type="danger" {...buttonData}>
      danger
    </Button>
    <Button type="danger-outline" {...buttonData}>
      danger-outline
    </Button>
    <Button type="tertiary" {...buttonData}>
      tertiary
    </Button>
    <Button disabled {...buttonData}>
      disabled
    </Button>
  </>
)

export const Primary = () => (
  <Button type="primary" icon={select('Icon', iconData, null)} {...buttonData}>
    {text('Text', 'Button')}
  </Button>
)
export const Normal = () => (
  <Button type="normal" icon={select('Icon', iconData, null)} {...buttonData}>
    {text('Text', 'Button')}
  </Button>
)
export const Danger = () => (
  <Button type="danger" icon={select('Icon', iconData, null)} {...buttonData}>
    {text('Text', 'Button')}
  </Button>
)
export const DangerOutline = () => (
  <Button
    type="danger-outline"
    icon={select('Icon', iconData, null)}
    {...buttonData}
  >
    {text('Text', 'Button')}
  </Button>
)
export const Tertiary = () => (
  <Button type="tertiary" icon={select('Icon', iconData, null)} {...buttonData}>
    {text('Text', 'Button')}
  </Button>
)
export const Disabled = () => (
  <Button disabled icon={select('Icon', iconData, null)} {...buttonData}>
    {text('Text', 'Button')}
  </Button>
)
