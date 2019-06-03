import styled, { css } from 'styled-components'
import { transparentize } from '../mixings'

export const Button = styled.button<{ secondary?: boolean }>`
  ${({ theme, secondary }) => css`
    font-size: 1.6rem;
    text-decoration: none;
    display: inline-block;
    padding: 0.8rem 3rem;
    border: none;
    position: relative;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    line-height: 1.7;

    & > span {
      transition: all 0.2s;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-color: ${theme.colors.primary};
      transition: all 0.2s;
      opacity: 1;
    }

    &:focus {
      transform: translateY(-1px);
      outline: none;
      box-shadow: 0 0 3.7rem ${transparentize(theme.colors.white, 0.2)};
    }

    &:hover {
      box-shadow: ${theme.shadow};
      z-index: 5;
      font-weight: 200;

      &::before {
        transform: scaleX(1.3) scaleY(1.68);
        opacity: 0;
      }
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.silver};
      box-shadow: 0 0 1rem ${transparentize(theme.colors.greyDark, 0.2)};
    }

    ${secondary &&
      css`
        background-color: ${theme.colors.grey};

        &::before {
          background-color: ${theme.colors.grey};
        }
      `}
  `}
`
