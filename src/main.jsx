import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Estimate from './pages/Estimate'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import LawnMaintenance from './pages/services/LawnMaintenance'
import SodInstallation from './pages/services/SodInstallation'
import TreeServices from './pages/services/TreeServices'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estimate" element={<Estimate />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/services/lawn-maintenance" element={<LawnMaintenance />} />
        <Route path="/services/sod-installation" element={<SodInstallation />} />
        <Route path="/services/tree-services" element={<TreeServices />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
