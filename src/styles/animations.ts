import { keyframes } from 'styled-components'

export const moveInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }

  80% {
    transform: translateX(1rem);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

export const moveInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }

  80% {
    transform: translateX(-1rem);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

export const moveInBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(3rem);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export const moveInTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-3rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const spin = (fromColor, toColor) => keyframes`
  0% {
    transform: rotate(0deg);
    border-top-color: ${fromColor};
  }
  
  50% {
    border-top-color: ${toColor};
  }
  
  100% {
    transform: rotate(360deg);
    border-top-color: ${fromColor};
  }
`
