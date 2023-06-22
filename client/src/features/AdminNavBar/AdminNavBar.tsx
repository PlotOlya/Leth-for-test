import React, { memo, useCallback } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';
import { adminLogout } from '../../components/AdminAuthorization/AdminAuthorizationSlice';
import { useAppDispatch } from '../../store';

function AdminNavBar(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = useCallback(
    async (event: React.MouseEvent) => {
      event.preventDefault();

      const result = await dispatch(adminLogout());
      if (adminLogout.fulfilled.match(result)) {
        navigate('/adminAuth');
      }
    },
    [dispatch, navigate]
  );
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Кабинет администратора</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/admin/reservation">Брони</Nav.Link>
              <Nav.Link href="/admin/certificate">Сертификаты</Nav.Link>
              {/* <Nav.Link href="#">Отзывы</Nav.Link> */}
            </Nav>
            <Nav>
              <Nav.Link onClick={handleLogout}>Выход</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
}

export default memo(AdminNavBar);
