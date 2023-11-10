import Link from 'next/link'
import {
  AccountCircle,
  FavoriteBorder,
  ExitToApp
} from '@styled-icons/material-outlined'
import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown'

import Dropdown from '../Dropdown'

import { UserDropdownProps } from './types'

import * as S from './styles'

const UserDropdown = ({ username }: UserDropdownProps) => (
  <Dropdown
    title={
      <>
        <AccountCircle size={24} />
        <S.Username>{username}</S.Username>
        <ChevronDown size={24} />
      </>
    }
  >
    <S.Nav>
      <Link href="/profile/me">
        <S.Link>
          <AccountCircle size={24} />
          <span>My profile</span>
        </S.Link>
      </Link>
      <Link href="/wishlist">
        <S.Link>
          <FavoriteBorder size={24} />
          <span>Wishlist</span>
        </S.Link>
      </Link>
      <Link href="/logout">
        <S.Link>
          <ExitToApp size={24} />
          <span>Sign out</span>
        </S.Link>
      </Link>
    </S.Nav>
  </Dropdown>
)

export default UserDropdown
