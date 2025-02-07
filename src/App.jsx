
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import Footer from './componets/Footer'
import View from './Pages/View'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <ToastContainer position="top-right" theme="colored" />
      <div className="d-flex flex-column min-vh-100">
        <div className="flex-grow-1">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/view/:id' element={<View />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
