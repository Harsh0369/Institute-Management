import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Auth from './pages/AuthPage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  )
}

export default App
