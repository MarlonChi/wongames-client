import Link from 'next/link'
import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted
} from 'styled-icons/material-outlined'

import * as S from './styles'

const ProfileMenu = () => {
  return (
    <S.Nav>
      <Link href="/profile/me">
        <S.Link>
          <AccountCircle size={24} />
          <span>My profile</span>
        </S.Link>
      </Link>

      <Link href="/profile/cards">
        <S.Link>
          <CreditCard size={24} />
          <span>My cards</span>
        </S.Link>
      </Link>

      <Link href="/profile/orders">
        <S.Link>
          <FormatListBulleted size={24} />
          <span>My orders</span>
        </S.Link>
      </Link>

      <Link href="/logout">
        <S.Link>
          <ExitToApp size={24} />
          <span>Sign out</span>
        </S.Link>
      </Link>
    </S.Nav>
  )
}

export default ProfileMenu
