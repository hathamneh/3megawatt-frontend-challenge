import React from 'react'
import RightPanel from './components/RightPanel'
import colors from './theme/colors'
import styled from '@emotion/styled'
import BgEffect from './components/BgEffect'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './pages/dasboard'
import Plants from './pages/plants'
import PlantsForm from './pages/plants-form'

const AppContainer = styled.div`
  background-color: ${colors.appBg};
  display: flex;
`

const Content = styled.main`
  position: relative;
`

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <BgEffect />
        <RightPanel />

        <Content>
          <Switch>
            <Route path="/">
              <Dashboard />
            </Route>
            <Route path="/plants">
              <Plants />
            </Route>
            <Route path="/plants/:plantUid">
              <PlantsForm />
            </Route>
          </Switch>
        </Content>
      </AppContainer>
    </Router>
  )
}

export default App
