import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import SideMenu from '../SideMenu/SideMenu';
import Navbar from '../Navbar/Navbar';
import Layout from '../Layout/Layout';

function App():JSX.Element {
  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Navbar />}>
            <Route path='/' element={<SideMenu />}/>
          </Route>
          </Route>
      </Routes>
  );
}

export default App;
