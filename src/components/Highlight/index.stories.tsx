import { Meta, StoryObj } from '@storybook/react'
import Highlight from '.'

import item from './mock'

import { HighlightProps } from './types'

export default {
  title: 'Components/Highlight',
  component: Highlight,
  args: { ...item }
} as Meta

export const Default: StoryObj<HighlightProps> = {
  render: (args) => (
    <div style={{ maxWidth: '104rem' }}>
      <Highlight {...args} />
    </div>
  )
}

export const WithFloatImage: StoryObj<HighlightProps> = {
  render: (args) => (
    <div style={{ maxWidth: '104rem' }}>
      <Highlight {...args} />
    </div>
  )
}
WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
