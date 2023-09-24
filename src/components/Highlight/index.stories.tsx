import { Meta, StoryObj } from '@storybook/react'
import Highlight from '.'

import { HighlightProps } from './types'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: "Red Dead it's back",
    subtitle: "Come see John's new adventures",
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2'
  }
} as Meta

export const Default: StoryObj<HighlightProps> = {}
