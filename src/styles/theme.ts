import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      lightPink: string
      white: string
      silver: string
      grey: string
      greyDark: string
      text: string
    }
    font: {
      sm: string
      md: string
      lg: string
      xl: string
    }
    shadow: string
  }
}

const theme: DefaultTheme = {
  colors: {
    primary: '#159F9E',
    lightPink: '#FFDDDB',
    white: '#F4F4F4',
    silver: '#E4E5E6',
    grey: '#8F8E8B',
    greyDark: '#1C1C1C',
    text: '#1C1C1C',
  },
  font: {
    sm: '1rem',
    md: '1.5rem',
    lg: '3rem',
    xl: '4rem',
  },
  shadow: `0 0 1.7rem rgba(0, 0, 0, .4)`,
}

export { theme }
