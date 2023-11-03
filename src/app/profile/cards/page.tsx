'use client'

import CardsList from '../../../components/CardsList'
import Profile from '../../../templates/Profile'

import { CardsListProps } from '../../../components/CardsList/types'

import mockCards from '../../../components/PaymentOptions/mock'

export default function Cards({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={mockCards} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      cards: mockCards
    }
  }
}
