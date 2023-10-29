import Base from '../Base'
import { Container } from '../../components/Container'
import { Divider } from '../../components/Divider'
import Heading from '../../components/Heading'
import Showcase from '../../components/Showcase'
import CartList from '../../components/CartList'
import PaymentOptions from '../../components/PaymentOptions'
import Empty from '../../components/Empty'

import { CartProps } from './types'

import * as S from './styles'

const Cart = ({
  recommendedGames,
  recommendedHighlight,
  items,
  total,
  cards
}: CartProps) => {
  const handlePayment = () => ({})

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        {items.length ? (
          <S.Content>
            <CartList items={items} total={total} />
            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </S.Content>
        ) : (
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <Showcase
        title="You may like these games"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Cart
