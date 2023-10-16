import { Meta, StoryObj } from '@storybook/react'
import highlightMock from '../Highlight/mock'
import gameCardSliderMock from '../GameCardSlider/mock'

import { ShowcaseProps } from './types'

import Showcase from '.'

export default {
  title: 'Sections/Showcase',
  component: Showcase,
  decorators: [
    (StoryObj) => (
      <div style={{ margin: '0 auto' }}>
        <StoryObj />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj<ShowcaseProps> = {
  render: (args) => <Showcase {...args} />
}
Default.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gameCardSliderMock
}

export const WithoutHighlight: StoryObj<ShowcaseProps> = {
  render: (args) => <Showcase {...args} />
}
WithoutHighlight.args = {
  title: 'Most Popular',
  games: gameCardSliderMock
}

export const WithoutGames: StoryObj<ShowcaseProps> = {
  render: (args) => <Showcase {...args} />
}
WithoutGames.args = {
  title: 'Most Popular',
  highlight: highlightMock
}
