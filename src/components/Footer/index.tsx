import Link from 'next/link'

import Heading from '../Heading'
import Logo from '../Logo'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact Us
        </Heading>
        <a href="mailto:marlonchiodelli@hotmail.com">sac@wongames.com</a>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>

        <nav aria-labelledby="social media">
          <a
            href="https://www.instagram.com/won-games"
            target="_blank"
            rel="noopenner noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/won-games"
            target="_blank"
            rel="noopenner noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtobe.com/won-games"
            target="_blank"
            rel="noopenner noreferrer"
          >
            Youtobe
          </a>
          <a
            href="https://www.facebook.com/won-games"
            target="_blank"
            rel="noopenner noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>

        <nav aria-labelledby="footer resources">
          <Link href="/">Home</Link>
          <Link href="/games">Buscar</Link>
          <Link href="/search">Buscar</Link>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Location
        </Heading>

        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem Ipsum</span>
        <span>Lorem ipsum dolor.</span>
      </S.Column>
    </S.Content>
    <S.Copyright>Won Games 2023 © All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
