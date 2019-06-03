import React, { Dispatch, useContext, useEffect, useReducer } from 'react'
import uuid from 'uuid/v1'

import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from '../services/storage.service'

export interface Story {
  id?: string
  title: string
  description?: string
  username: string
}

export interface StoryState {
  storyPopupVisible?: boolean
  latest: Story[]
  editorPicks: Story[]
}

const initialState = {
  latest: [
    {
      id: uuid(),
      title: 'How Daenerys was betrayed by jon snow.',
      username: 'Jon Snow',
    },
    {
      id: uuid(),
      title: 'One day I woke up, and realized that I was dead for a bit.',
      username: 'Jon Snow',
    },
    {
      id: uuid(),
      title: 'How I survived death.',
      username: 'Jon Snow',
    },
  ],
  editorPicks: [],
}

const StoryStateContext = React.createContext<StoryState>(initialState)

type Action =
  | { type: 'TOGGLE_STORY_POPUP' }
  | { type: 'ADD_STORY'; story: Story }
  | { type: 'MARK_STORY_AS_FEATURED'; storyId: string }
  | { type: 'DELETE_FEATURED'; storyId: string }
  | { type: 'DELETE_STORY'; storyId: string }

const StoryDispatchContext = React.createContext<Dispatch<Action> | undefined>(
  undefined
)

const removeStory = (arr, storyId) => arr.filter(story => story.id !== storyId)

function storyReducer(state: StoryState, action: Action) {
  switch (action.type) {
    case 'TOGGLE_STORY_POPUP':
      return { ...state, storyPopupVisible: !state.storyPopupVisible }
    case 'ADD_STORY':
      return {
        ...state,
        latest: [...state.latest, { ...action.story, id: uuid() }],
      }
    case 'MARK_STORY_AS_FEATURED':
      if (
        state.editorPicks.findIndex(story => story.id === action.storyId) === -1
      ) {
        const record = state.latest.find(story => story.id === action.storyId)
        return {
          ...state,
          editorPicks: [...state.editorPicks, record],
        }
      }
      return state
    case 'DELETE_FEATURED':
      return {
        ...state,
        editorPicks: removeStory(state.editorPicks, action.storyId),
      }
    case 'DELETE_STORY':
      return {
        editorPicks: removeStory(state.editorPicks, action.storyId),
        latest: removeStory(state.latest, action.storyId),
        storyPopupVisible: false,
      }
    default:
      throw new Error(`Unhandled action type ${action['type']}`)
  }
}

export function StoryProvider({ children }) {
  const savedState = loadFromLocalStorage('story-state')

  const [state, setState] = useReducer(storyReducer, savedState || initialState)

  return (
    <StoryStateContext.Provider value={state}>
      <StoryDispatchContext.Provider value={setState}>
        {children}
      </StoryDispatchContext.Provider>
    </StoryStateContext.Provider>
  )
}

export function useStoryState() {
  const context = useContext(StoryStateContext)

  if (context === undefined) {
    throw new Error(`useStoryState must be used inside an StoryProvider`)
  }

  useEffect(() => {
    saveToLocalStorage('story-state', context)
  }, [context])

  return context
}

export function useStoryDispatch() {
  const context = useContext(StoryDispatchContext)

  if (context === undefined) {
    throw new Error(`useStoryDispatch must be used inside an StoryProvider`)
  }

  return context
}
