import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import ProtectedRoute from './components/auth/ProtectedRoute'
import Home from './pages/Home'
import Medicines from './pages/Medicines'
import Cart from './pages/Cart'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'
import Footer from './components/layout/Footer'
import { CartProvider } from './contexts/CartContext'
import './App.css'

function App() {
  return (
    <CartProvider>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/medicines" element={<Medicines />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App