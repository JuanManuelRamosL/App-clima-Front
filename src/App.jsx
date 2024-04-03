import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import './App.css'
import Apps from './Apps';
import Detalles from './componente/Detalle';

function App() {


  return (
    <>
        <Routes>
          <Route path="/" element={<Apps />} />
          <Route path="/detalle" element={<Detalles />} />
        </Routes>
    </>
  )
}

export default App