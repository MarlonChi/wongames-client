import { Meta, StoryObj } from '@storybook/react'
import CartDropdown from '.'
import { CartDropdownProps } from './types'

import itemsMock from '../CartList/mock'

export default {
  title: 'components/CartDropdown',
  component: CartDropdown,
  args: { items: itemsMock, total: 'R$ 300,00' },
  parameters: { backgrounds: { default: 'won-dark' } }
} as Meta

export const Default: StoryObj<CartDropdownProps> = {
  render: (args) => (
    <div
      style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}
    >
      <CartDropdown {...args} />
    </div>
  )
}
