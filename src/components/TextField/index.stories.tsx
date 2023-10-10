import { Meta, StoryObj } from '@storybook/react'
import { Email } from '@styled-icons/material-outlined'

import TextField from '.'

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    icon: <Email />,
    id: 'Email',
    initialvalue: '',
    placeholder: 'marlon@teste.com'
  },
  argTypes: {
    onInput: { action: 'changed' }
  }
} as Meta

export const Default: StoryObj = {
  render: (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField {...args} />
    </div>
  )
}
