import React from 'react'
import Menu from './components/Menu'
import { breakpoints, colors, Page } from './theme'
import styled from '@emotion/styled'
import BgEffect from './components/BgEffect'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DashboardPage from './pages/dashboard-page'
import PlantsPage from './pages/plants-page'
import NewPlantsPage from './pages/new-plants-page'

const AppContainer = styled.div`
  background-color: ${colors.appBg};
  display: flex;
  @media screen and (max-width: ${breakpoints.md}px) {
    flex-direction: column;
  }
`

const App: React.FC = () => (
  <BrowserRouter>
    <AppContainer>
      <BgEffect />
      <Menu />

      <Page>
        <Switch>
          <Route path="/" exact component={() => <DashboardPage />} />
          <Route path="/plants/new" exact component={() => <NewPlantsPage />} />
          <Route path="/plants/list/:page?" exact component={() => <PlantsPage />} />
        </Switch>
      </Page>
    </AppContainer>
  </BrowserRouter>
)

export default App
