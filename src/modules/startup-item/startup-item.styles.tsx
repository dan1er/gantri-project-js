import styled from 'styled-components'
import { media } from '../../styles/media'

export const StartupInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 1.5rem;
  text-align: left;

  ${media.lessThan('xs')`
    padding: 0 2rem;
    align-items: center;
    margin-bottom: 4rem;
    text-align: center;
  `}
`

export const StartupEmptyBox = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  position: relative;
  width: 100%;

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`

export const StartupEmptyBoxContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

export const StartupItemContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 0.2s;
  width: 80%;
  justify-content: stretch;
  margin-bottom: 5rem;

  & > * {
    flex: 1;
  }

  ${media.lessThan('xs')`
    flex-direction: column;
    width: 100%;
    margin-bottom: 2rem;
  `}

  &:nth-child(2n) {
    flex-direction: row-reverse;

    ${media.lessThan('xs')`
      flex-direction: column;
    `}

    ${media.greaterThan('xs')`
      & ${StartupInfo} > * {
        padding-left: 10rem;
      }
    `}
  }
`
