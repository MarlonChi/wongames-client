import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { MediaMatchProps, breakpoint } from './types'

const mediaMatchModifier = {
  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)`display: block`}
  `,

  greaterThan: (size: breakpoint) => css`
    ${media.greaterThan(size)`display: block`}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifier.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifier.greaterThan(greaterThan)}
  `}
`
