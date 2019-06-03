import React from 'react'

export default function withContextProvider(Component, Provider) {
  return props => (
    <Provider>
      <Component {...props} />
    </Provider>
  )
}
