import { HighlightProps } from '../../components/Highlight/types'
import { GameCardProps } from '../../components/GameCard/types'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}
