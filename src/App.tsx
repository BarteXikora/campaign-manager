import AppTheme from './theme/AppTheme'

import Container from './components/layout/container/Container'
import Header from './components/layout/header/Header'
import ListHeader from './components/layout/listHeader/ListHeader'
import List from './components/layout/list/List'

const App = () => {
  return <AppTheme>
    <Container>
      <Header />
      <ListHeader />
      <List />
    </Container>
  </AppTheme>
}

export default App