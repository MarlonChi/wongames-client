'use client'
import Cart from '../../templates/Cart'

import itemsMock from '../../components/CartList/mock'
import gamesMock from '../../components/GameCardSlider/mock'
import highlightMock from '../../components/Highlight/mock'
import cardsMock from '../../components/PaymentOptions/mock'

import { CartProps } from '../../templates/Cart/types'

export default function CartPage(props: CartProps) {
  return (
    <Cart
      {...props}
      items={itemsMock}
      total="$ 430,00"
      cards={cardsMock}
      recommendedGames={gamesMock}
      recommendedHighlight={highlightMock}
    />
  )
}
export async function getServerSideProps() {
  return {
    props: {
      items: itemsMock,
      total: '$ 430,00',
      cards: cardsMock,
      recommendedGames: gamesMock,
      recommendedHighlight: highlightMock
    }
  }
}
