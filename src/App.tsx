import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CapturePage from './pages/capture/CapturePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={ <CapturePage /> } path='/' />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
