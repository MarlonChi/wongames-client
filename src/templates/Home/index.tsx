import Highlight from '../../components/Highlight'

import { Container } from '../../components/Container'
import Footer from '../../components/Footer'
import Heading from '../../components/Heading'
import Menu from '../../components/Menu'
import GameCardSlider from '../../components/GameCardSlider'
import BannerSlider from '../../components/BannerSlider'

// import { HomeTemplateProps } from './types'

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
        {/* <BannerSlider items={banners} /> */}
        <BannerSlider items={BannerSliderMock} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Heading lineLeft lineColor="secondary">
          News
        </Heading>

        {/* <GameCardSlider items={newGames} color="black" /> */}
        <GameCardSlider items={GameCardSliderMock} color="black" />
      </Container>
    </S.SectionNews>

    <Container>
      <S.SectionMostPopular>
        <Heading lineLeft lineColor="secondary">
          Most Popular
        </Heading>
        {/* <Highlight {...mostPopularHighlight} /> */}
        <Highlight {...HighlightMock} />
        {/* <GameCardSlider items={mostPopularGames} />  */}
        <GameCardSlider items={GameCardSliderMock} />
      </S.SectionMostPopular>

      <S.SectionUpcoming>
        <Heading lineLeft lineColor="secondary">
          Upcomming
        </Heading>
        {/* <GameCardSlider items={upcommingGames} />
        <Highlight {...upcommingHighligth} />
        <GameCardSlider items={upcommingMoreGames} /> */}
        <GameCardSlider items={GameCardSliderMock} />
        <Highlight {...HighlightMock} />
        <GameCardSlider items={GameCardSliderMock} />
      </S.SectionUpcoming>

      <S.SectionFreeGames>
        <Heading lineLeft lineColor="secondary">
          Free games
        </Heading>
        {/*
        <Highlight {...freeHighligth} />
        <GameCardSlider items={freeGames} /> */}
        <Highlight {...HighlightMock} />
        <GameCardSlider items={GameCardSliderMock} />
      </S.SectionFreeGames>
    </Container>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
