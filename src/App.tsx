import AppTheme from './theme/AppTheme'

import Container from './components/layout/container/Container'
import Header from './components/layout/header/Header'

const App = () => {
  return <AppTheme>
    <Container>
      <Header />
    </Container>
  </AppTheme>
}

export default App