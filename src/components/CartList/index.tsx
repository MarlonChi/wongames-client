import Link from 'next/link'

import GameItem from '../GameItem'
import Button from '../Button'

import { CartListProps } from './types'

import * as S from './styles'

const CartList = ({ items, total, hasButton = false }: CartListProps) => (
  <S.Wrapper>
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
  </S.Wrapper>
)

export default CartList
