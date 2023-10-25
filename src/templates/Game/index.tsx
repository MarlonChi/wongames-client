import GameInfo from '../../components/GameInfo'
import Gallery from '../../components/Gallery'

import Base from '../Base'

import * as S from './styles'

import { GameTemplateProps } from './types'

const Game = ({ cover, gameInfo, gallery }: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>
    </S.Main>
  </Base>
)

export default Game
