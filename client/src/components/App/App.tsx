import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar1 from '../NavBar/NavBar';
import Reservation from '../Reservation/Reservation';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar1 />}>
          <Route path="Reservation" element={<Reservation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
