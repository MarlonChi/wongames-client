import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/tests/helpers'

import Logo from '.'

describe('<Logo/>', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)

    const element = screen.getByLabelText(/Won Games/i).parentElement

    expect(element).toHaveStyle({ color: '#fafafa' })
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)

    const element = screen.getByLabelText(/Won Games/i).parentElement

    expect(element).toHaveStyle({ color: '#030517' })
  })

  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)

    const element = screen.getByLabelText(/Won Games/i).parentElement

    expect(element).toHaveStyle({ width: '11rem' })
  })

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)

    const element = screen.getByLabelText(/Won Games/i).parentElement

    expect(element).toHaveStyle({ width: '20rem' })
  })

  it('should render a bigger logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />)

    const element = screen.getByLabelText(/Won Games/i).parentElement

    expect(element).toHaveStyleRule('width', '5.8rem')
  })
})
