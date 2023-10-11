import { Meta, StoryObj } from '@storybook/react'
import Heading from '.'

export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    },
    color: {
      control: { type: 'inline-radio' }
    }
  }
} as Meta

export const Default: StoryObj = {}
Default.args = {
  children: 'Most Populars'
}
