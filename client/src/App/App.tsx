import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NavBar1 from '../components/NavBar1/NavBar1';

import Reservation from '../features/adminReservation/Reservation';
import Layout from '../components/Layout/Layout';
import Certificate from '../components/Certificate/Certificate';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/admin/" element={<NavBar1 />}>
        <Route path="reservation" element={<Reservation />} />
      </Route>
      <Route path="/sertif" element={<Certificate />} /> 
      <Route path="/" element={<Layout />} />
    </Routes>
  );
}

export default App;
