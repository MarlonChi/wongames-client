import Link from 'next/link'

import Button from '../Button'

import { EmptyProps } from './types'

import * as S from './styles'

const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <S.Wrapper>
    <S.Image
      src="/img/empty.svg"
      alt="a gamer in a counch playing videogame"
      role="image"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    {hasLink && (
      <Link href="/" passHref>
        <Button as="a">Go back to store</Button>
      </Link>
    )}
  </S.Wrapper>
)

export default Empty
