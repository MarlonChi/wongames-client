import { Meta, StoryObj } from '@storybook/react'
import cardMock from './mock'

import { PaymentOptionsProps } from './types'

import PaymentOptions from '.'

export default {
  title: 'Components/PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: cardMock
  },
  handlePayment: {
    action: 'clicked'
  }
} as Meta

export const Default: StoryObj<PaymentOptionsProps> = {
  render: (args) => (
    <div style={{ padding: 16, maxWidth: 400 }}>
      <PaymentOptions {...args} />
    </div>
  )
}
