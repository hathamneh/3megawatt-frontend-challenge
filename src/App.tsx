import React from 'react'
import RightPanel from './components/RightPanel'
import colors from './theme/colors'
import styled from '@emotion/styled'
import BgEffect from './components/BgEffect'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Reports from './pages/reports'
import PlantsPage from './pages/plants-page'
import NewPlantsPage from './pages/new-plants-page'

const AppContainer = styled.div`
  background-color: ${colors.appBg};
  display: flex;
`

const Content = styled.main`
  position: relative;
  flex: 1;
  padding: 32px;
  display:flex;
`

const App: React.FC = () => (
  <BrowserRouter>
    <AppContainer>
      <BgEffect />
      <RightPanel />

      <Content>
        <Switch>
          <Route path="/" exact component={() => <Reports />} />
          <Route path="/plants" exact component={() => <PlantsPage />} />
          <Route
            path="/plants/new"
            exact
            component={() => <NewPlantsPage />}
          />
        </Switch>
      </Content>
    </AppContainer>
  </BrowserRouter>
)

export default App
