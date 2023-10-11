import { Meta, StoryObj } from '@storybook/react'
import GameCardSlider from '.'

import items from './mock'

export default {
  title: 'Components/GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <GameCardSlider items={[]} {...args} />
    </div>
  )
}
