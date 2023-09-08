import { screen } from '@testing-library/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import { renderWithTheme } from '../../utils/tests/helpers'

import Button from '.'

describe('<Button/>', () => {
  it('should render the medium by default', () => {
    const { container } = renderWithTheme(<Button>Buy now</Button>)

    const element = screen.getByRole('button', { name: /Buy now/i })

    expect(element).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Buy now</Button>)

    const element = screen.getByRole('button', { name: /Buy now/i })

    expect(element).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Buy now</Button>)

    const element = screen.getByRole('button', { name: /Buy now/i })

    expect(element).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should render full width version', () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>)

    const element = screen.getByRole('button', { name: /Buy now/i })

    expect(element).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>
    )

    const element = screen.getByText(/Buy now/i)
    const icon = screen.getByTestId('icon')

    expect(element).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })
})
