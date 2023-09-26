import Slider from '../Slider'
import Banner from '../Banner'

import { BannerSliderProps } from './types'
import { SliderSettings } from '../Slider/types'

import * as S from './styles'

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

const BannerSlider = ({ items }: BannerSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items && items.map((item) => <Banner key={item.title} {...item} />)}
    </Slider>
  </S.Wrapper>
)

export default BannerSlider
