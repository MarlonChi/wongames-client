import { Meta, StoryObj } from '@storybook/react'
import { Email } from '@styled-icons/material-outlined'

import TextField from '.'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    name: 'email',
    icon: <Email />,
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

export const WithError: StoryObj = {
  render: (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField {...args} />
    </div>
  )
}
WithError.args = {
  error: 'Ops...something is wrong'
}
