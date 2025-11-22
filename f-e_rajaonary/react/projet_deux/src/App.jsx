import { Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Page_1 from './pages/Page_1'

function App() {

  return (
    <Routes>
      <Route path ="/" element={<Accueil/>} />
      <Route path ="/Page_1" element={<Page_1/>} />
    </Routes>
  )
}

export default App