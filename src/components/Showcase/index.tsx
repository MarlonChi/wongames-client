import Heading from '../../components/Heading'
import Highlight from '../../components/Highlight'
import GameCardSlider from '../../components/GameCardSlider'

import { ShowcaseProps } from './types'

import * as S from './styles'

const Showcase = ({ title, highlight, games }: ShowcaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} />}
  </S.Wrapper>
)

export default Showcase
