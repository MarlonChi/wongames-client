'use client'

import OrdersList from '../../../components/OrdersList'
import Profile from '../../../templates/Profile'

import ordersMock from '../../../components/OrdersList/mock'

export default function Orders() {
  return (
    <Profile>
      <OrdersList items={ordersMock} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      cards: ordersMock
    }
  }
}
