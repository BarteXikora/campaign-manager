import AppTheme from './theme/AppTheme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import View from './components/layout/view/View'
import ListScreen from './components/screens/listScreen/ListScreen'
import CreateScreen from './components/screens/createScreen/CreateScreen'
import EditScreen from './components/screens/editScreen/EditScreen'
import ConfirmRemoveScreen from './components/screens/confirmRemoveScreen/ConfirmRemoveScreen'

const App = () => {
  return <AppTheme>
    <BrowserRouter>
      <Routes>
        <Route element={<View />}>
          <Route path='/' element={<ListScreen />} />
          <Route path='/create' element={<CreateScreen />} />
          <Route path='/edit/:id' element={<EditScreen />} />
          <Route path='/confirm-remove/:id' element={<ConfirmRemoveScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppTheme>
}

export default App