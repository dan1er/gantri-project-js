import styled from 'styled-components'
import { media } from '../../styles/media'
import { Paragraph } from '../../styles/typography'

export const FoundersContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.silver};
  padding: 6rem 0;
  text-align: center;

  ${Paragraph} {
    max-width: 60rem;
  }

  ${media.lessThan('xs')`
      padding: 3rem 2rem;
    `}
`
