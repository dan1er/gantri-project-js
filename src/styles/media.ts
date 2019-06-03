import { generateMedia } from 'styled-media-query'

export const media = generateMedia(
  {
    xs: '37.5em',
    sm: '56.25em',
    md: '75em',
    xl: '112.5em',
  },
  10
)
