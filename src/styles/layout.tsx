import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { moveInBottom } from './animations'
import { media } from './media'
import { transparentize } from './mixings'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const AnimatedButton = styled.span`
  ${({ theme }) => css`
    font-size: 1.6rem;
    text-decoration: none;
    padding: 1rem 2rem;
    color: ${theme.colors.primary};
    position: relative;
    border-radius: 2.2rem;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transform: scaleY(0);
      background-color: ${theme.colors.primary};
      transition: all 0.1s cubic-bezier(0.49, 0.18, 0.59, 1.27);
      transform-origin: center;
      z-index: -1;
      opacity: 0;
    }

    &:active,
    &:focus {
      outline: none;
      box-shadow: 0 0 1.7rem ${transparentize(theme.colors.greyDark, 0.2)};
    }

    &:hover {
      color: ${theme.colors.white};
      box-shadow: ${theme.shadow};

      &::before {
        transform: scaleY(1);
        opacity: 1;
      }
    }
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    height: 5rem;
    background-color: ${transparentize(theme.colors.white, 0.97)};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    box-shadow: 0 4px 0.6rem ${transparentize(theme.colors.greyDark, 0.1)};
    display: flex;
    align-items: center;
    padding: 0 2rem;
  `}
`

export const Logo = styled(Link)`
  &,
  &:active &:visited {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2.4rem;
    font-weight: 400;
    display: inline-block;
    margin-right: auto;
  }
`

export const Content = styled.main`
  margin-top: 5rem;
  flex: 1;
`

export const UserNameText = styled.span`
  margin-right: 2rem;
  margin-top: 0.3rem;
  text-transform: capitalize;
`

export const Banner = styled.section<{
  size?: 'small' | 'normal'
  textCentered?: boolean
}>`
  ${({ theme, size }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${theme.colors.greyDark};
    height: ${size === 'small' ? '25rem' : '57rem'};
    text-align: ${size === 'small' ? 'center' : 'inherit'};
    padding-left: 2.5rem;

    ${media.lessThan('sm')`
    padding: 1rem;
    text-align: center;
    height: 40rem;
  `}

    ${media.lessThan('xs')`
      height: ${size === 'small' ? '15rem' : '35rem'};
    `}
  `}
`

export const CenteredContainer = styled.div`
  display: flex;
  margin: 2rem auto;
  justify-content: center;
`

export const BannerButtonBox = styled.div`
  margin-top: 4rem;
  animation: ${moveInBottom} 1.3s;
`

export const Footer = styled.section`
  padding: 10rem 0;
  background-color: ${({ theme }) => theme.colors.silver};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
