import React from 'react';
import './Layout.css';
import Footer from '../Footer/Footer';
import Contacts from '../Contacts/Contacts';
import Navbar from '../Navbar/NavBar1';
import SideMenu from '../SideMenu/SideMenu';

export default function Layout(): JSX.Element {
  return (
    <body className="body">
      <Navbar />
      <SideMenu />
      <Contacts />
      <Footer />
    </body>
  );
}
