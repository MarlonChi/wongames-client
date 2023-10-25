import Base from '../Base'

import * as S from './styles'

import { GameTemplateProps } from './types'

const Game = ({ cover }: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />
  </Base>
)

export default Game
