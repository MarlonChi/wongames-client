import { Meta, StoryObj } from '@storybook/react'
import Game from '.'

import GameDetailsMock from '../../components/GameDetails/mock'
import { descriptionHTML, galleryMock, highlightMock, sliderMock } from './mock'

export default {
  title: 'Pages/Game',
  component: Game
} as Meta

export const Default: StoryObj = {}
Default.args = {
  cover:
    'https://images.unsplash.com/photo-1531842477197-54acf89bff98?auto=format&fit=crop&q=80&w=1365&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  gameInfo: {
    title: 'Borderlands 3',
    price: '215,00',
    description:
      'Experience the epic space strategy games that redefined the RTS genre. Control your fleet and buld an armada across more than 30 single-player missions.'
  },
  gallery: galleryMock,
  description: descriptionHTML,
  details: GameDetailsMock,
  upcomingGames: sliderMock,
  upcomingHighlight: highlightMock,
  recommendedGames: sliderMock
}
