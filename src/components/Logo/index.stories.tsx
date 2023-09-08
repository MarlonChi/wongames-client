import { Meta, StoryObj } from '@storybook/react'
import Logo from '.'

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    color: {
      control: { type: 'inline-radio' }
    }
  }
} as Meta

export const Default: StoryObj = {}
