import { GameInfoProps } from '../../components/GameInfo/types'
import { GalleryImageProps } from '../../components/Gallery/types'
import { GameDetailsProps } from '../../components/GameDetails/types'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
}

export type CoverProps = {
  src: string
}
