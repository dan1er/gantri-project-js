import styled, { css } from 'styled-components'
import { spin } from '../animations'
import { transparentize } from '../mixings'

export const Loading = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${transparentize(theme.colors.silver, 0.6)};
    z-index: 5;

    &:before {
      content: '';
      width: 10rem;
      height: 10rem;
      border: 1.2rem solid ${({ theme }) => theme.colors.silver};
      border-top: 1.2rem solid ${theme.colors.primary};
      box-shadow: 0 0 1.5rem ${transparentize(theme.colors.primary, 0.3)};
      border-radius: 50%;
      background-color: transparent;
      z-index: 100;
      position: fixed;
      top: 30rem;
      left: 50%;
      transform: translateY(-50%, -50%);
      animation: ${spin(
          theme.colors.primary,
          transparentize(theme.colors.greyDark)
        )}
        1.5s linear infinite;
    }
  `}
`
