import { Meta, StoryObj } from '@storybook/react'
import { GameItemProps } from './types'

import GameItem from '.'

export default {
  title: 'Components/GameItem',
  component: GameItem,
  args: {
    img: 'https://images.unsplash.com/photo-1583337426008-2fef51aa841d?auto=format&fit=crop&q=80&w=1288&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00'
  }
} as Meta

export const Default: StoryObj<GameItemProps> = {
  render: (args) => <GameItem {...args} />
}

export const WithDownloadIcon: StoryObj<GameItemProps> = {
  render: (args) => <GameItem {...args} />
}
WithDownloadIcon.args = {
  downloadLink: 'http://google.com'
}

export const WithPayment: StoryObj<GameItemProps> = {
  render: (args) => <GameItem {...args} />
}
WithPayment.args = {
  downloadLink: 'http://google.com',
  paymentInfo: {
    flag: 'mastercard',
    img: '/img/master-card.svg',
    number: '*** *** **** 4326',
    purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
  }
}
