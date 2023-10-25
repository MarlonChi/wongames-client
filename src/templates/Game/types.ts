import { GameInfoProps } from '../../components/GameInfo/types'
import { GalleryImageProps } from '../../components/Gallery/types'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
}

export type CoverProps = {
  src: string
}
