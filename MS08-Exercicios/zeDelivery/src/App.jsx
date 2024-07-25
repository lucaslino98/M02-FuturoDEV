import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Cabecalho from './components/cabecalho/cabecalho';
import Login from './components/login/login';
import Hero from './components/hero/hero';
import Produtos from './components/produtos/produtos';
import Modal from './components/modal/modal';

function App() {
  const [showModal, setShowModal] = useState(true);
  const [isAdult, setIsAdult] = useState(false);

  const handleConfirm = () => {
    setIsAdult(true);
    setShowModal(false);
  };

  const handleClose = () => {
    setIsAdult(false);
    setShowModal(false);
  };

  return (
    <>
      <Modal show={showModal} onClose={handleClose} onConfirm={handleConfirm} />
      <BrowserRouter>
        <Cabecalho />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      {isAdult && <Produtos />}
    </>
  );
}

export default App;

