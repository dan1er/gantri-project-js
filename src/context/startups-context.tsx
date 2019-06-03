import React, { useContext } from 'react'

export interface Startup {
  title: string
  description: string
}

export interface StartupState {
  startups: Startup[]
}

const initialState = {
  startups: [
    {
      title: 'Only the hottest startups.',
      description:
        'We hand-select only the hottest startups and our expert copywriters interview and produce every story.',
    },
    {
      title: 'Simplest way to read.',
      description:
        'Learn from you phone or from your computer, and continue where you left off anytime.',
    },
    {
      title: 'Free. Forever.',
      description:
        "We're a non profit project supported by Silicon Valley's top VCs and startup incubators. You won't have to pay a cent.",
    },
  ],
}

const StartupStateContext = React.createContext<StartupState>(initialState)

export function StartupProvider({ children }) {
  return (
    <StartupStateContext.Provider value={initialState}>
      {children}
    </StartupStateContext.Provider>
  )
}

export function useStartupState() {
  const context = useContext(StartupStateContext)

  if (context === undefined) {
    throw new Error(`useStartupState must be used inside an StartupProvider`)
  }

  return context
}
