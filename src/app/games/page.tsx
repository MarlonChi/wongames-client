'use client'
import GamesTemplate from '../../templates/Games'

import { GamesProps } from '../../templates/Games/types'

import filterItemsMock from '../../components/ExploreSidebar/mock'
import gamesMock from '../../components/GameCardSlider/mock'

export default function GamesPage(props: GamesProps) {
  return (
    <GamesTemplate {...props} games={gamesMock} filterItem={filterItemsMock} />
  )
}
export async function getServerSideProps() {
  return {
    props: {
      games: gamesMock,
      filterItems: filterItemsMock
    }
  }
}
