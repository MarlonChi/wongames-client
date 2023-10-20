import { Meta, StoryObj } from '@storybook/react'
import mockGame from './mock'
import GameDetails from '.'
import { GameDetailsProps } from './types'

export default {
  title: 'Components/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: mockGame,
  argTypes: {
    releaseDate: { control: 'date' },
    platforms: {
      control: 'inline-check',
      options: ['windows', 'linux', 'mac']
    },
    genres: {
      control: 'inline-check',
      options: ['Role-playing', 'Narrative', 'Action']
    }
  }
} as Meta

export const Default: StoryObj<GameDetailsProps> = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <GameDetails {...args} />
    </div>
  )
}
