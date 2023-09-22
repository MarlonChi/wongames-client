import { Meta, StoryObj } from '@storybook/react'
import Banner from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://placehold.co/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season </p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = {}
