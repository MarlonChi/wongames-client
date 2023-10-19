import { Meta, StoryObj } from '@storybook/react'
import GameInfo from '.'
import { GameInfoProps } from './types'
import mock from './mock'

export default {
  title: 'components/GameInfo',
  component: GameInfo,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: mock
} as Meta

export const Default: StoryObj<GameInfoProps> = {
  render: (args) => (
    <div style={{ maxWidth: '144rem', padding: '1.5rem' }}>
      <GameInfo {...args} />
    </div>
  )
}
