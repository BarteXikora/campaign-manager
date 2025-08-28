import AppTheme from './theme/AppTheme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import View from './components/layout/view/View'
import ListScreen from './components/screens/listScreen/ListScreen'

const App = () => {
  return <AppTheme>
    <BrowserRouter>
      <Routes>
        <Route element={<View />}>
          <Route path='/' element={<ListScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppTheme>
}

export default App