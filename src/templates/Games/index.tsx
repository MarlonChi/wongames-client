import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import Base from '../Base'
import ExploreSidebar from '../../components/ExploreSidebar'
import GameCard from '../../components/GameCard'
import { Grid } from '../../components/Grid'

import { GamesProps } from './types'

import * as S from './styles'

const GamesTemplate = ({ filterItem, games = [] }: GamesProps) => {
  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    return
  }
  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItem} onFilter={handleFilter} />
        <section>
          <Grid>
            {games?.map((item) => <GameCard key={item.title} {...item} />)}
          </Grid>
          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show More</p>
            <ArrowDown size={35} />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
