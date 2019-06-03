import React, { memo } from 'react'
import { Startup } from '../../context/startups-context'
import { StartupItem } from '../startup-item'
import { StartupsContainer } from './startups-section.styles'

export interface StartupsSectionProps {
  records: Startup[]
}

export const StartupsSection = memo((props: StartupsSectionProps) => (
  <StartupsContainer id="startup">
    {props.records.map((startup, index) => (
      <StartupItem
        key={index}
        title={startup.title}
        description={startup.description}
      />
    ))}
  </StartupsContainer>
))
