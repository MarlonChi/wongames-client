import { GameCardProps } from '../GameCard/types'
import { HighlightProps } from '../Highlight/types'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
}
