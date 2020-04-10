import React from 'react'
import { withKnobs, text, select, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Input from '.'

export default {
  title: 'Input',
  decorators: [withKnobs],
  component: Input,
  excludeStories: /.*Data$/
}

const inputData = {
  label: 'Label',
  placeholder: 'Placeholder',
  onChange: action('Input value changed'),
  errorMessage: 'Error message'
}

export const allInputs = () => (
  <>
    <Input {...inputData} />
    <Input required {...inputData} />
    <Input isError {...inputData} />
    <Input disabled {...inputData} />
    <Input type="textarea" {...inputData} />
  </>
)

export const Default = () => <Input {...inputData} />
