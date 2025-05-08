import { Route, Routes } from 'react-router-dom'
import './assets/css/tailwind.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
      
    </>
  )
}

export default App
