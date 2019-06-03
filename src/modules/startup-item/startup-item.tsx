import React, { memo } from 'react'
import { HeadingSecondary, Paragraph } from '../../styles/typography'
import {
  StartupEmptyBox,
  StartupEmptyBoxContent,
  StartupInfo,
  StartupItemContainer,
} from './startup-item.styles'

export interface StartupItemProps {
  title: string
  description: string
}

export const StartupItem = memo((props: StartupItemProps) => (
  <StartupItemContainer>
    <StartupInfo>
      <HeadingSecondary>{props.title}</HeadingSecondary>
      <Paragraph>{props.description}</Paragraph>
    </StartupInfo>
    <StartupEmptyBox>
      <StartupEmptyBoxContent />
    </StartupEmptyBox>
  </StartupItemContainer>
))
