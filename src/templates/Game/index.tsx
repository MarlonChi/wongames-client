import GameInfo from '../../components/GameInfo'
import Gallery from '../../components/Gallery'
import TextContent from '../../components/TextContent'

import Base from '../Base'

import * as S from './styles'

import { GameTemplateProps } from './types'

const Game = ({ cover, gameInfo, gallery, description }: GameTemplateProps) => (
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
    </S.Main>
  </Base>
)

export default Game
