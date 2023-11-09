import Link from 'next/link'

import GameItem from '../GameItem'
import Button from '../Button'

import { CartListProps } from './types'

import * as S from './styles'
import Empty from '../Empty'

const CartList = ({ items = [], total, hasButton = false }: CartListProps) => (
  <S.Wrapper isEmpty={!items.length}>
    {items?.length ? (
      <>
        {items?.map((item) => <GameItem key={item.title} {...item} />)}

        <S.Footer>
          {!hasButton && <span>Total: </span>}
          <S.Total>{total}</S.Total>
          {hasButton && (
            <Link href="/cart">
              <Button as="a">Buy it now</Button>
            </Link>
          )}
        </S.Footer>
      </>
    ) : (
      <Empty
        title="Your cart is empty"
        description="Go back to the store and explore great games and offers"
        hasLink
      />
    )}
  </S.Wrapper>
)

export default CartList
