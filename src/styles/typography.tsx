import styled from 'styled-components'
import { moveInLeft, moveInRight, moveInTop } from './animations'
import { media } from './media'

export const HeadingPrimary = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  animation: ${moveInLeft} 0.8s;
  font-size: 4rem;
  font-weight: 100;
  letter-spacing: 0.2rem;

  ${media.lessThan('xs')`
      font-size: 3rem
  `}
`

export const SubHeading = styled.h4`
  color: ${({ theme }) => theme.colors.white};
  animation: ${moveInRight} 0.8s;
  font-size: 1.5rem;
  font-weight: 200;
  letter-spacing: 0.1rem;
`

export const HeadingSecondary = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 1.2rem;
  animation: ${moveInTop} 0.8s;

  ${media.lessThan('xs')`
      font-size: 2.5rem;
   `}
`

export const Paragraph = styled.p`
  font-size: 1.5rem;
  font-weight: 300;

  ${media.lessThan('xs')`
    font-size: 1.3rem;
  `}
`
