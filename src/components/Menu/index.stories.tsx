import { Meta, StoryObj } from '@storybook/react'
import Menu from '.'

export default {
  title: 'Components/Menu',
  component: Menu
} as Meta

export const Default: StoryObj = {}
Default.parameters = {
  layout: 'fullscreen'
}

export const Logged: StoryObj = {}
Logged.parameters = {
  layout: 'fullscreen'
}
Logged.args = {
  user: 'Marlon'
}
