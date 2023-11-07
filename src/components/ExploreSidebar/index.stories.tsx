import { Meta, StoryObj } from '@storybook/react'
import ExploreSidebar from '.'

import { ExploreSidebarProps } from './types'

import items from './mock'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  args: {
    items: items
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj<ExploreSidebarProps> = {
  render: (args) => <ExploreSidebar {...args} />
}

export const WithInitialValues: StoryObj<ExploreSidebarProps> = {
  render: (args) => (
    <ExploreSidebar
      {...args}
      initialValues={{ windows: true, sort_by: 'low-to-high' }}
    />
  )
}
