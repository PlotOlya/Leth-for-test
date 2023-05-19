import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar1 from '../NavBar/NavBar1';
import Reservation from '../Reservation/Reservation';
import Layout from '../Layout/Layout';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/" element={<NavBar1 />}>
          <Route path="reservation" element={<NavBar1 />} />
        </Route>
        <Route path="/" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
