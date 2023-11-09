import { Meta, StoryObj } from '@storybook/react'
import mockItems from './mock'

import { CartListProps } from './types'

import CartList from '.'

export default {
  title: 'Components/CartList',
  component: CartList,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    items: mockItems,
    total: 'R$ 330,00'
  }
} as Meta

export const Default: StoryObj<CartListProps> = {
  render: (args) => (
    <div style={{ maxWidth: 800 }}>
      <CartList {...args} />
    </div>
  )
}

export const WithButton: StoryObj<CartListProps> = {
  render: (args) => (
    <div style={{ maxWidth: 800 }}>
      <CartList {...args} hasButton />
    </div>
  )
}

export const Empty: StoryObj<CartListProps> = {
  render: () => (
    <div style={{ maxWidth: 800 }}>
      <CartList />
    </div>
  )
}
