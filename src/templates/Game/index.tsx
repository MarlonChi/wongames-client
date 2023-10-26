import GameInfo from '../../components/GameInfo'
import Gallery from '../../components/Gallery'
import TextContent from '../../components/TextContent'
import GameDetails from '../../components/GameDetails'
import Showcase from '../../components/Showcase'

import Base from '../Base'

import * as S from './styles'

import { GameTemplateProps } from './types'

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighlight,
  recommendedGames
}: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails {...details} />
      </S.SectionGameDetails>

      <Showcase
        title="Upcoming"
        games={upcomingGames}
        highlight={upcomingHighlight}
      />

      <Showcase title="You  may like these games" games={recommendedGames} />
    </S.Main>
  </Base>
)

export default Game
