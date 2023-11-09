import CartIcon from '../CartIcon'
import CartList from '../CartList'
import Dropdown from '../Dropdown'

import { CartDropdownProps } from './types'

import * as S from './styles'

const CartDropdown = ({ items, total }: CartDropdownProps) => (
  <S.Wrapper>
    <Dropdown title={<CartIcon quantity={items?.length} />}>
      <CartList items={items} total={total} hasButton />
    </Dropdown>
  </S.Wrapper>
)

export default CartDropdown
