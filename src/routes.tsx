import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import HomePage from './pages/home'

const StoriesPage = React.lazy(() => import('./pages/stories'))

export const routes = (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/stories" component={StoriesPage} />
    <Redirect to="/" />
  </Switch>
)
