import { HighlightProps } from '../../components/Highlight/types'
import { GameCardProps } from '../../components/GameCard/types'
import { CartListProps } from '../../components/CartList/types'
import { PaymentOptionsProps } from '../../components/PaymentOptions/types'

export type CartProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>
