import React from 'react'
import Menu from './components/Menu'
import { breakpoints, colors } from './theme'
import styled from '@emotion/styled'
import BgEffect from './components/BgEffect'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Reports from './pages/reports'
import PlantsPage from './pages/plants-page'
import NewPlantsPage from './pages/new-plants-page'

const AppContainer = styled.div`
  background-color: ${colors.appBg};
  display: flex;
  @media screen and (max-width: ${breakpoints.md}px) {
    flex-direction: column;
  }
`

const Content = styled.main`
  position: relative;
  flex: 1;
  padding: 32px;
  display: flex;
`

const App: React.FC = () => (
  <BrowserRouter>
    <AppContainer>
      <BgEffect />
      <Menu />

      <Content>
        <Switch>
          <Route path="/" exact component={() => <Reports />} />
          <Route path="/plants/new" exact component={() => <NewPlantsPage />} />
          <Route path="/plants/:page?" exact component={() => <PlantsPage />} />
        </Switch>
      </Content>
    </AppContainer>
  </BrowserRouter>
)

export default App
