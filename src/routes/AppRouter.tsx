import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import ProductDetail from '../pages/ProductDetail'
import Foundation from '../pages/Foundation'
import Testimonials from '../pages/Testimonials'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/tienda" element={<Shop />} />
    <Route path="/producto/:id" element={<ProductDetail />} />
    <Route path="/fundacion" element={<Foundation />} />
    <Route path="/testimonios" element={<Testimonials />} />
    <Route path="/contacto" element={<Contact />} />
    <Route path="*" element={<Navigate to="/404" />} />
    <Route path="/404" element={<NotFound />} />
  </Routes>
)
