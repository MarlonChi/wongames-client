import { Container } from '../../components/Container'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
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
  <section>
    <Container>
      <Menu />
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

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
