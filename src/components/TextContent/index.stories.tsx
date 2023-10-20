import { Meta, StoryObj } from '@storybook/react'
import textMock from './mock'
import TextContent from '.'
import { TextContentProps } from './types'

export default {
  title: 'Components/TextContent',
  component: TextContent,
  args: textMock,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj<TextContentProps> = {
  render: (args) => <TextContent {...args} />
}
