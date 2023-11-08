import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'

import { CartIconProps } from './types'

import * as S from './styles'

const CartIcon = ({ quantity = 0 }: CartIconProps) => (
  <S.Wrapper>
    {quantity > 0 && <S.Badge aria-label="Cart Items">{quantity}</S.Badge>}
    <ShoppingCartIcon aria-label="Shopping Cart" />
  </S.Wrapper>
)

export default CartIcon
