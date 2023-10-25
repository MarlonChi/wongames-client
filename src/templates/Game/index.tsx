import GameInfo from '@/components/GameInfo'
import Base from '../Base'

import * as S from './styles'

import { GameTemplateProps } from './types'

const Game = ({ cover, gameInfo }: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>
    </S.Main>
  </Base>
)

export default Game
