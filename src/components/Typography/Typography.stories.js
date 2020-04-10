import React from 'react'
import { withKnobs, text, select, number } from '@storybook/addon-knobs'
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Subtitle1,
  Subtitle2,
  Body1,
  Body2,
  Caption,
  Overline
} from './index'

export default {
  title: 'Typography',
  decorators: [withKnobs],
  excludeStories: /.*Data$/
}

const placeholder = 'A peep at some distant orb has power to raise '

export const allTextStyles = () => (
  <>
    <Heading1>{text('Text', placeholder)}</Heading1>
    <Heading2>{text('Text', placeholder)}</Heading2>
    <Heading3>{text('Text', placeholder)}</Heading3>
    <Heading4>{text('Text', placeholder)}</Heading4>
    <Subtitle1>{text('Text', placeholder)}</Subtitle1>
    <Subtitle2>{text('Text', placeholder)}</Subtitle2>
    <Body1>{text('Text', placeholder)}</Body1>
    <Body2>{text('Text', placeholder)}</Body2>
    <Caption>{text('Text', placeholder)}</Caption>
    <Overline>{text('Text', placeholder)}</Overline>
  </>
)
