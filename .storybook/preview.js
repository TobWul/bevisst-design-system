import React from 'react'
import { addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import '../src/styles/global.scss'

const Wrapper = ({ children }) => (
  <div style={{ padding: '2rem' }}>{children}</div>
)

addDecorator(withA11y)
addDecorator(story => <Wrapper>{story()}</Wrapper>)
