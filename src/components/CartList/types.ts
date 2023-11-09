import { GameItemProps } from '../GameItem/types'

export type CartListProps = {
  items?: GameItemProps[]
  total?: string
  hasButton?: boolean
}

export type WrapperProps = {
  isEmpty: boolean
}
