import React, { memo, useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AdminNavBar from '../features/AdminNavBar/AdminNavBar';
import Reservation from '../features/adminReservation/Reservation';
import Layout from '../components/Layout/Layout';
import MenuList from '../components/MenuList/MenuList';

import BarMenuList from '../components/BarMenuList/BarMenuList';

import AdminAuthorization from '../components/AdminAuthorization/AdminAuthorization';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage';
import { getUser } from '../components/AdminAuthorization/AdminAuthorizationSlice';
import { RootState, useAppDispatch } from '../store';
import CertificatePage from '../features/adminCertificatePage/CertificatePage';
import './App.css';
import { Admin } from '../components/AdminAuthorization/type/Admin';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const admin = useSelector((state: RootState) => state.adminAuth.admin);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    // здесь нужно сделать редирект на форму авторизации если админ не авторизован
    <Routes>
      {admin ? (
        <Route path="/admin/" element={<AdminNavBar />}>
          <Route path="adminAuth" element={<AdminAuthorization />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="certificate" element={<CertificatePage />} />
        </Route>
      ) : (
        <Route path="/adminAuth" element={<AdminAuthorization />} />
      )}

      <Route path="/" element={<Layout />} />
      <Route path="/menu" element={<MenuList />} />

      <Route path="/barmenu" element={<BarMenuList />} />
      <Route path="/adminAut" element={<AdminAuthorization />} />
      <Route path="/*" element={<NotFoundPage/>} />

    </Routes>
  );
}

export default memo(App);
