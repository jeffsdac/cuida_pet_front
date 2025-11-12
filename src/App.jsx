import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Main from './pages/Main'

export default function App() {
  return (
    <BrowserRouter>        
          <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/main" element={<Main />} />
          </Routes>
    </BrowserRouter>
  )
}
