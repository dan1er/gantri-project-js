import React, { memo } from 'react'
import { Story } from '../../context/stories-context'
import { HeadingSecondary } from '../../styles/typography'
import { Card } from '../card'
import { CardAction } from '../card/card.styles'
import { StoriesRow, StoriesSectionContainer } from './stories-section.styles'

export interface StoriesSectionProps {
  canDisplayActions: boolean
  lastStories: Story[]
  editorStories: Story[]
  markAsFeatured: (storyId: string) => void
  deleteFeatured: (storyId: string) => void
  deleteStory: (storyId: string) => void
}

export const StoriesSection = memo((props: StoriesSectionProps) => {
  return (
    <>
      {!!props.editorStories.length && (
        <StoriesSectionContainer>
          <HeadingSecondary>Editor's Pick</HeadingSecondary>

          <StoriesRow>
            {props.editorStories.map((story, index) => (
              <Card
                key={index}
                title={story.title}
                username={story.username}
                actions={
                  props.canDisplayActions && (
                    <CardAction onClick={() => props.deleteFeatured(story.id)}>
                      Delete
                    </CardAction>
                  )
                }
              />
            ))}
          </StoriesRow>
        </StoriesSectionContainer>
      )}

      <StoriesSectionContainer>
        <HeadingSecondary>Latest</HeadingSecondary>

        <StoriesRow>
          {props.lastStories.map((story, index) => (
            <Card
              key={index}
              title={story.title}
              username={story.username}
              actions={
                props.canDisplayActions && (
                  <>
                    <CardAction onClick={() => props.markAsFeatured(story.id)}>
                      Feature
                    </CardAction>
                    <CardAction onClick={() => props.deleteStory(story.id)}>
                      Delete
                    </CardAction>
                  </>
                )
              }
            />
          ))}
        </StoriesRow>
      </StoriesSectionContainer>
    </>
  )
})
