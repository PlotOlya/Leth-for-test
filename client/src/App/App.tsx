import React, { memo, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import AdminNavBar from '../features/AdminNavBar/AdminNavBar';

import Reservation from '../features/adminReservation/Reservation';
import Layout from '../components/Layout/Layout';
// import Certificate from "../components/Certificate/CertificateForm";
import MenuList from '../components/MenuList/MenuList';
import AdminAuthorization from '../components/AdminAuthorization/AdminAuthorization';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage';
import { getUser } from '../components/AdminAuthorization/AdminAuthorizationSlice';
import { useAppDispatch } from '../store';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/admin/" element={<AdminNavBar />}>
        <Route path="adminAuth" element={<AdminAuthorization />} />
        <Route path="reservation" element={<Reservation />} />
      </Route>
      <Route path="/" element={<Layout />} />
      <Route path="/menu" element={<MenuList />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default memo(App);
