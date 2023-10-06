import { Meta, StoryObj } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
      control: { type: 'inline-radio' }
    },
    icon: {
      control: { type: '' }
    }
  }
} as Meta

export const Default: StoryObj = {}
Default.args = {
  children: 'Buy now',
  size: 'medium'
}

export const WithIcon: StoryObj = {}
WithIcon.args = {
  children: 'Buy now',
  size: 'medium',
  icon: <AddShoppingCart />
}

export const AsLink: StoryObj = {}
AsLink.args = {
  children: 'Buy now',
  size: 'large',
  as: 'a',
  href: '/link'
}

export const Minimal: StoryObj = {}
Minimal.args = {
  children: 'Buy now',
  size: 'medium',
  minimal: true,
  icon: <AddShoppingCart />
}
