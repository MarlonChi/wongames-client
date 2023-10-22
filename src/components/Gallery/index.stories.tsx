import { Meta, StoryObj } from '@storybook/react'
import items from './mock'
import { GalleryProps } from './types'
import Gallery from '.'

export default {
  title: 'Components/Gallery',
  component: Gallery,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj<GalleryProps> = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <Gallery {...args} />
    </div>
  )
}
