import { Meta, StoryObj } from '@storybook/react'

import GameCard from '.'

import { GameCardProps } from './types'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://images.unsplash.com/photo-1562229125-6d6075419a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  }
} as Meta

export const Default: StoryObj<GameCardProps> = {
  render: (args) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  )
}
