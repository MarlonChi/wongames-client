import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/tests/helpers'

import Heading from '.'

describe('<Heading/>', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>)

    const element = screen.getByRole('heading', { name: /won games/i })

    expect(element).toHaveStyle({ color: '#fafafa' })
  })

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>)

    const element = screen.getByRole('heading', { name: /won games/i })

    expect(element).toHaveStyle({ color: '#030517' })
  })

  it('should render a heading with a line to left side', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>)

    const element = screen.getByRole('heading', { name: /won games/i })

    expect(element).toHaveStyle({
      'border-left': '0.7rem solid #F231A5'
    })
  })

  // it('should render a heading with a line at the bottom', () => {
  //   renderWithTheme(<Heading lineBottom>Won Games</Heading>)

  //   const element = screen.getByRole('heading', {
  //     name: /won games/i
  //   })

  //   expect(element).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
  //     modifier: '::after'
  //   })
  // })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>)

    const element = screen.getByRole('heading', { name: /won games/i })

    expect(element).toHaveStyle({
      'font-size': '1.6rem'
    })
  })

  it('should render a heading with a huge size', () => {
    renderWithTheme(<Heading size="huge">Won Games</Heading>)

    const element = screen.getByRole('heading', { name: /won games/i })

    expect(element).toHaveStyle({
      'font-size': '5.2rem'
    })
  })

  // it('should render a heading with a line at the bottom', () => {
  //   renderWithTheme(<Heading lineBottom>Won Games</Heading>)

  //   const element = screen.getByRole('heading', {
  //     name: /won games/i
  //   })

  //   expect(element).toHaveStyleRule('width', '3rem', {
  //     modifier: '::after'
  //   })
  // })
})
