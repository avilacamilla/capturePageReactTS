import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CapturePage from './pages/Capture/CapturePage';
import ThanksPage from './pages/Thanks/ThanksPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={ <CapturePage /> } path='/' />
          <Route  element={ <ThanksPage /> } path='thanks'/>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
