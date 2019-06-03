import { useAuthState } from '../context/auth-context'

export function useIsAuthenticated() {
  const state = useAuthState()
  return !!state.userInfo
}

export function useLoggedUsername() {
  const state = useAuthState()
  return state.userInfo.name
}
