import Heading from '../../components/Heading'
import ProfileMenu from '../../components/ProfileMenu'
import { Container } from '../../components/Container'
import Base from '../Base'

import { ProfileProps } from './types'

import * as S from './styles'

const Profile = ({ children }: ProfileProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        My profile
      </Heading>
      <S.Main>
        <ProfileMenu />
        <S.Content>{children}</S.Content>
      </S.Main>
    </Container>
  </Base>
)

export default Profile
