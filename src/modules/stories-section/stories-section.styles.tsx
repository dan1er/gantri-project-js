import styled from 'styled-components'
import { media } from '../../styles/media'
import { transparentize } from '../../styles/mixings'
import { HeadingSecondary } from '../../styles/typography'
import { CardContainer } from '../card/card.styles'

export const StoriesSectionContainer = styled.section`
  padding: 1rem 3rem;

  ${media.lessThan('xs')`
    padding: .5rem;
  `}

  ${HeadingSecondary} {
    margin-left: 2rem;
    margin-bottom: -1rem;
  }
`

export const StoriesRow = styled.div`
  display: flex;
  overflow: scroll;
  padding: 2rem;

  ${media.greaterThan('md')`
    &:hover {
      padding: 4rem 4.5rem;
    }
  
    & > ${CardContainer} {
      max-width: 32%;
    }
  
    & > ${CardContainer}:not(:last-child) {
      margin-right: 2rem;
    }
  
    &:hover > ${CardContainer} {
      transform: scale(0.95);
    }
  
    &:hover > ${CardContainer}:hover {
      transform: scale(1.2);
      box-shadow: 0 0 1rem
        ${({ theme }) => transparentize(theme.colors.greyDark, 0.4)};
      z-index: 1;
    }  
  `}

  ${media.lessThan('xs')`
    padding: 0.5rem 0;
  `}

  &::-webkit-scrollbar {
    display: none;
  }
`
