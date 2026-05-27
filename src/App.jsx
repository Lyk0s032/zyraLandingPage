import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ComplexProfile from './components/ComplexProfile'
import ReservationScreen from './components/ReservationScreen'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/c/:slug" element={<ComplexProfile />} />
        <Route path="/c/:slug/reservar" element={<ReservationScreen />} />
      </Routes>
    </BrowserRouter>
  )
}
