import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { DiaryProvider } from './diary'
import Navigation from './containers/Navigation'
import { HashRouter as Router } from 'react-router-dom'
import Routes from './containers/Routes'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#C7243A' },
    secondary: { main: '#F3C759' }
  }
})

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <DiaryProvider>
        <Router>
          <Routes />
          <Navigation />
        </Router>
      </DiaryProvider>
    </MuiThemeProvider>
  )
}

export default App
