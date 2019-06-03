import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from './context/auth-context'
import { theme } from './styles/theme'

export function AppProviders({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  )
}
