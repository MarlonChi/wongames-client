import Base from '../Base'
import Heading from '../../components/Heading'
import Showcase from '../../components/Showcase'
import GameCard from '../../components/GameCard'

import { Grid } from '../../components/Grid'
import { Container } from '../../components/Container'

import { WishlistTemplateProps } from './types'

// import * as S from './styles'

const Wishlist = ({
  games,
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      <Grid>
        {games?.map((game, index) => (
          <GameCard key={`wishlist-${index}`} {...game} />
        ))}
      </Grid>
    </Container>
    <Showcase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default Wishlist
