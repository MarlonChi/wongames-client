import '../../../.jest/match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import BannerSlider from '.'

const items = [
  {
    img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling'
  },
  {
    img: 'https://images.unsplash.com/photo-1521907554502-7440e4702fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

describe('<BannerSlider/>', () => {
  it('should render vertical slider', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })

  it('should render with 1 active item', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2)
    expect(container.querySelector('.slick-active')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /defy death 1/i, hidden: false })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /defy death 2/i, hidden: true })
    ).toBeInTheDocument()
  })

  it('should render with the dots', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
  })
})
