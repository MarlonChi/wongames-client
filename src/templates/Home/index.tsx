import { Container } from '../../components/Container'
import Base from '../Base'
import BannerSlider from '../../components/BannerSlider'
import Showcase from '../../components/Showcase'

import * as S from './styles'
import { BannerSliderMock, GameCardSliderMock, HighlightMock } from './mock'

const Home = () => (
  // {
  // banners,
  // newGames,
  // mostPopularHighlight,
  // mostPopularGames,
  // upcommingGames,
  // upcommingHighligth,
  // upcommingMoreGames,
  // freeGames,
  // freeHighligth
  // }: HomeTemplateProps
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={BannerSliderMock} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title="News" games={GameCardSliderMock} />
    </S.SectionNews>

    <Showcase
      title="Most Popular"
      highlight={HighlightMock}
      games={GameCardSliderMock}
    />

    <S.SectionUpcoming>
      <Showcase title="Upcomming" games={GameCardSliderMock} />
      <Showcase highlight={HighlightMock} games={GameCardSliderMock} />
    </S.SectionUpcoming>

    <Showcase
      title="Free games"
      highlight={HighlightMock}
      games={GameCardSliderMock}
    />
  </Base>
)

export default Home
