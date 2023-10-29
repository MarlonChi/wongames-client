import { Meta, StoryObj } from '@storybook/react'

import gamesMock from '../../components/GameCardSlider/mock'
import highlightMock from '../../components/Highlight/mock'
import itemsMock from '../../components/CartList/mock'
import cardsMock from '../../components/PaymentOptions/mock'

import Cart from '.'

export default {
  title: 'Pages/Cart',
  component: Cart,
  args: {
    items: itemsMock,
    total: '$ 430,00',
    cards: cardsMock,
    recommendedHighlight: highlightMock,
    recommendedGames: gamesMock
  }
} as Meta

export const Default: StoryObj = {}

export const EmptyCart: StoryObj = {
  render: () => (
    <Cart
      recommendedGames={gamesMock}
      recommendedHighlight={highlightMock}
      total="$ 430,00"
      items={[]}
    />
  )
}
