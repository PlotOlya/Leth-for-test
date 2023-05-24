import React, { memo, useCallback } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  adminLogout,
  getAdmin,
} from '../../components/AdminAuthorization/AdminAuthorizationSlice';
import { useAppDispatch } from '../../store';

function AdminNavBar(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const admin = useSelector(getAdmin);

  const handleLogout = useCallback(
    async (event: React.MouseEvent) => {
      event.preventDefault();

      const result = await dispatch(adminLogout());
      if (adminLogout.fulfilled.match(result)) {
        navigate('/admin/adminAuth');
      }
    },
    [dispatch, navigate]
  );
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/admin/reservation">Брони</Nav.Link>
              <Nav.Link href="#">Сертификаты</Nav.Link>
              <Nav.Link href="#">Отзывы</Nav.Link>
            </Nav>
            {admin ? (
              <Nav>
                <Nav.Link onClick={handleLogout}>Выход</Nav.Link>
              </Nav>
            ) : (
              []
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
}

export default memo(AdminNavBar);
