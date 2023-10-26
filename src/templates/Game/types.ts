import { GameInfoProps } from '../../components/GameInfo/types'
import { GalleryImageProps } from '../../components/Gallery/types'
import { GameDetailsProps } from '../../components/GameDetails/types'
import { GameCardProps } from '../../components/GameCard/types'
import { HighlightProps } from '../../components/Highlight/types'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  recommendedGames: GameCardProps[]
}

export type CoverProps = {
  src: string
}
