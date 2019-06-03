import React, { memo } from 'react'
import {
  StoryProvider,
  useStoryDispatch,
  useStoryState,
} from '../context/stories-context'
import withContextProvider from '../hoc/with-provider'
import { useIsAuthenticated } from '../hooks/auth'
import { StoriesSection } from '../modules/stories-section'
import { StoryPopup } from '../modules/story-popup'
import { Button } from '../styles/components'
import { Banner, CenteredContainer, Content } from '../styles/layout'
import { HeadingPrimary } from '../styles/typography'

const StoriesPage = withContextProvider(
  memo(() => {
    const context = useStoryState()
    const isAuthenticated = useIsAuthenticated()
    const storyDispatch = useStoryDispatch()

    const markAsFeatured = (storyId: string) =>
      storyDispatch({
        type: 'MARK_STORY_AS_FEATURED',
        storyId,
      })

    const deleteFeatured = (storyId: string) =>
      storyDispatch({
        type: 'DELETE_FEATURED',
        storyId,
      })

    const deleteStory = (storyId: string) =>
      storyDispatch({
        type: 'DELETE_STORY',
        storyId,
      })

    const toggleStoryPopup = () =>
      storyDispatch({
        type: 'TOGGLE_STORY_POPUP',
      })

    return (
      <Content>
        <Banner size="small">
          <HeadingPrimary>Stories</HeadingPrimary>
        </Banner>

        {isAuthenticated && (
          <CenteredContainer>
            <Button onClick={toggleStoryPopup}>Add Story</Button>
          </CenteredContainer>
        )}

        <StoriesSection
          lastStories={context.latest}
          editorStories={context.editorPicks}
          markAsFeatured={markAsFeatured}
          deleteStory={deleteStory}
          deleteFeatured={deleteFeatured}
        />

        {context.storyPopupVisible && <StoryPopup />}
      </Content>
    )
  }),
  StoryProvider
)

export default StoriesPage
