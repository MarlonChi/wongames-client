import { Meta, StoryObj } from '@storybook/react'
import CartIcon from '.'

export default {
  title: 'components/CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj = {}

export const WithItems: StoryObj = {}
WithItems.args = {
  quantity: 12
}
