import React, { Dispatch, useContext, useEffect, useReducer } from 'react'
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from '../services/storage.service'

export interface User {
  name: string
  email: string
  password: string
}

export interface AuthState {
  popupVisible: boolean
  userInfo?: User
}

const AuthStateContext = React.createContext<AuthState>({
  popupVisible: false,
  userInfo: undefined,
})

type Action =
  | { type: 'TOGGLE_LOGIN_MODAL' }
  | {
      type: 'SIGN_UP'
      userInfo: User
    }
  | { type: 'LOG_OUT' }

const AuthDispatchContext = React.createContext<Dispatch<Action> | undefined>(
  undefined
)

function authReducer(state: AuthState, action: Action) {
  switch (action.type) {
    case 'TOGGLE_LOGIN_MODAL':
      return { ...state, popupVisible: !state.popupVisible }
    case 'SIGN_UP':
      return {
        ...state,
        popupVisible: false,
        userInfo: action.userInfo,
      }
    case 'LOG_OUT':
      return {
        ...state,
        userInfo: undefined,
      }
    default:
      throw new Error(`Unhandled action type ${action['type']}`)
  }
}

export function AuthProvider({ children }) {
  const savedState = loadFromLocalStorage('auth-state')

  const [state, setState] = useReducer(
    authReducer,
    savedState || { popupVisible: false }
  )

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={setState}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}

export function useAuthState() {
  const context = useContext(AuthStateContext)

  if (context === undefined) {
    throw new Error(`useAuthState must be used inside an AuthProvider`)
  }

  useEffect(() => {
    saveToLocalStorage('auth-state', context)
  }, [context])

  return context
}

export function useAuthDispatch() {
  const context = useContext(AuthDispatchContext)

  if (context === undefined) {
    throw new Error(`useAuthDispatch must be used inside an AuthProvider`)
  }

  return context
}
