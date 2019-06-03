import React, { memo } from 'react'
import { HeadingSecondary, Paragraph } from '../../styles/typography'
import { FoundersContainer } from './founders-section.styles'

export const FoundersSection = memo(() => (
  <FoundersContainer>
    <HeadingSecondary>Smart tools for founders.</HeadingSecondary>
    <Paragraph>
      LearnStart is the simplest way fpr startup founders to discover inspiring
      stories from startup founders from all over the world, all in one place.
    </Paragraph>
  </FoundersContainer>
))
