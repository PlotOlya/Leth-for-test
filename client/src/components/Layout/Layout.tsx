import React from 'react';
import './Layout.css';
import Footer from '../Footer/Footer';
import Contacts from '../Contacts/Contacts';
import Navbar from '../Navbar/Navbar';
import VideoBlock from '../VideoBlock/VideoBlock';
import Carusel from '../Carusel/Carusel';

export default function Layout(): JSX.Element {
  return (
    <body className="body">
      <Navbar />

      <VideoBlock />
      <Carusel />
      <Contacts />
      <Footer />
    </body>
  );
}
