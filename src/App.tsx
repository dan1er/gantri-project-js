import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useAuthDispatch, useAuthState } from './context/auth-context'
import { useIsAuthenticated } from './hooks/auth'
import { LoginPopup } from './modules/login-popup'
import { routes } from './routes'
import './styles/base'
import { GlobalStyle } from './styles/base'
import { Loading } from './styles/components'
import {
  Container,
  Header,
  Logo,
  AnimatedButton,
  UserNameText,
} from './styles/layout'

const App: React.FC = () => {
  const authState = useAuthState()
  const authDispatch = useAuthDispatch()
  const isAuthenticated = useIsAuthenticated()

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Header>
          <Logo to="/">LearnStart</Logo>

          {isAuthenticated ? (
            <>
              <UserNameText>{authState.userInfo.name}</UserNameText>
              <AnimatedButton onClick={() => authDispatch({ type: 'LOG_OUT' })}>
                Log Out
              </AnimatedButton>
            </>
          ) : (
            <AnimatedButton
              onClick={() => authDispatch({ type: 'TOGGLE_LOGIN_MODAL' })}
            >
              Sign up
            </AnimatedButton>
          )}
        </Header>

        <Suspense fallback={<Loading />}>{routes}</Suspense>
      </Container>

      {authState.popupVisible && <LoginPopup />}
    </BrowserRouter>
  )
}

export default App
