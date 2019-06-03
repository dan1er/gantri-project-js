import styled, { css } from 'styled-components'
import { media } from '../media'
import { transparentize } from '../mixings'

export const PopupTitleBox = styled.div`
  text-align: center;
`

export const PopupContent = styled.div`
  ${({ theme }) => css`
    width: 50rem;
    justify-content: stretch;
    max-width: 80rem;
    background-color: ${transparentize(theme.colors.white, 0.95)};
    background-size: cover;
    position: relative;
    padding: 4rem;

    ${media.lessThan('xs')`
      width: 100%;
      height: 100vh;
      background: ${theme.colors.white};
    `}
  `}
`

export const PopupCloseButton = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    text-decoration: none;
    position: absolute;
    top: 2.5rem;
    right: 2.5rem;
    font-size: 3.2rem;
    font-weight: 100;
    cursor: pointer;
    transition: all 0.2s;
    line-height: 0;

    &:hover {
      color: ${theme.colors.primary};
      text-shadow: 0 0 5rem ${transparentize(theme.colors.greyDark)};
    }

    ${media.lessThan('xs')`
      margin-right: 0;
    `}

    &:focus {
      color: ${theme.colors.greyDark};
    }
  `}
`

export const PopupActions = styled.section`
  display: flex;

  & > * {
    flex: 1;

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`

export const PopupContainer = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    transition: all 0.2s;
    padding-top: 20rem;
    background: ${transparentize(theme.colors.greyDark)};
    z-index: 100;

    ${media.lessThan('xs')`
      padding-top: 0;
    `}
  `}
`
