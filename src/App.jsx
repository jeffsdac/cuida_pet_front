import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import { Box, Container } from '@mui/material'

export default function App() {
  return (
    <BrowserRouter>
      
      <Navbar />
        <Box>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>

      </Box>

    </BrowserRouter>
  )
}
