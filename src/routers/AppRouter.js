import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReadingsDashboardPage from '../components/ReadingsDashboardPage'
import SettingsPage from '../components/SettingsPage'

import Header from '../components/Header'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ReadingsDashboardPage} exact={true} />
        <Route path="/settings" component={SettingsPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter