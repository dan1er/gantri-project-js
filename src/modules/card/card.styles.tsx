import styled, { css } from 'styled-components'
import { media } from '../../styles/media'
import { transparentize } from '../../styles/mixings'

export const CardContent = styled.div`
  height: 30rem;
  background-color: ${({ theme }) => theme.colors.grey};

  ${media.lessThan('md')`
    height: 20rem;
  `}

  ${media.lessThan('xs')`
    height: 14rem;
  `}
`

export const CardTitle = styled.div`
  margin-bottom: 1rem;
`

export const CardFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem;

  ${media.lessThan('xs')`
    padding: 0.8rem;
  `}
`

export const CardUserInfo = styled.div`
  display: flex;
  align-items: center;
`

export const CardImage = styled.div`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.silver};
`

export const CardUserName = styled.div`
  margin-left: 2rem;
  text-transform: capitalize;
`

export const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
  position: absolute;
  width: 100%;
  padding: 1rem;
`

export const CardAction = styled.span`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.4rem 1rem;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.2s;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow};

    ${media.greaterThan('md')`
      transform: scale(1.1);
    `}
  }
`

export const CardContainer = styled.div`
  ${({ theme }) => css`
    flex: 1;
    height: fit-content;
    box-shadow: 0 0 1rem ${transparentize(theme.colors.greyDark, 0.2)};
    min-width: 25rem;
    margin: 1rem 0.5rem;
    transition: transform 0.2s;
    position: relative;

    &:hover {
      box-shadow: 0 0 1rem ${transparentize(theme.colors.greyDark, 0.6)};
      
      ${media.greaterThan('md')`
        transform: translateY(-1rem) scale(1.05);
      `}

      & > ${CardActions} > ${CardAction} {
        visibility: visible;
        opacity: 1;
      }
    }
  `}
`
