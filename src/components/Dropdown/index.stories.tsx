import { Meta, StoryObj } from '@storybook/react'
import Dropdown from '.'
import { DropdownProps } from './types'

export default {
  title: 'components/Dropdown',
  component: Dropdown
} as Meta

export const Default: StoryObj<DropdownProps> = {
  render: (args) => <Dropdown {...args} />
}
Default.args = {
  title: 'Click here',
  children: 'content'
}
