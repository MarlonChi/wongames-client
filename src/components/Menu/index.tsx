import { useState } from 'react'
import Link from 'next/link'

import Logo from '../Logo'
import Button from '../Button'
import MediaMatch from '../MediaMatch'
import CartDropdown from '../CartDropdown'
import CartIcon from '../CartIcon'

import { MenuProps } from './types'

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import * as S from './styles'
import UserDropdown from '../UserDropdown'

const Menu = ({ user }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/">
          <Logo hideOnMobile />
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/">
            <S.MenuLink href="#">Home</S.MenuLink>
          </Link>
          <Link href="/games">
            <S.MenuLink href="#">Explore</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <MediaMatch greaterThan="medium">
            <CartDropdown aria-label="Open Shopping Cart" />
          </MediaMatch>
          <MediaMatch lessThan="medium">
            <Link href="/cart">
              <CartIcon />
            </Link>
          </MediaMatch>
        </S.IconWrapper>
        <MediaMatch greaterThan="medium">
          {!user ? (
            <Link href="/sign-in" passHref>
              <Button as="a">Sign in</Button>
            </Link>
          ) : (
            <UserDropdown username={user} />
          )}
        </MediaMatch>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          {user && (
            <>
              <Link href="/">
                <S.MenuLink href="#">Home</S.MenuLink>
              </Link>
              <Link href="/games">
                <S.MenuLink href="#">Explore</S.MenuLink>
              </Link>
            </>
          )}
          {user && (
            <>
              <Link href="/profile/me">
                <S.MenuLink href="#">My profile</S.MenuLink>
              </Link>
              <Link href="/wishlist">
                <S.MenuLink href="#">Wishlist</S.MenuLink>
              </Link>
            </>
          )}
        </S.MenuNav>
        {!user && (
          <S.RegisterBox>
            <Link href="/sign-in" passHref>
              <Button fullWidth size="large" as="a">
                Sign in
              </Button>
            </Link>
            <span>or</span>
            <Link href="/sign-up" passHref>
              <S.CreateAccount href="#" title="Sign In">
                Sign Up
              </S.CreateAccount>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
