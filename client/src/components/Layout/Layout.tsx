import React from 'react';
import './Layout.css';
import Footer from '../Footer/Footer';
import Navbar from '../NavBar/NavBar';
import Contacts from '../Contacts/Contacts';


import Navbar from '../Navbar/Navbar';


import VideoBlock from '../VideoBlock/VideoBlock';
import Carusel from '../Carusel/Carusel';
import DescriptionBlock from '../DescriptionBlock/DescriptionBlock';
import ShefBlock from '../ShefBlock/ShefBlock';
import Menu from '../Menu/Menu';
import Certificate from '../Certificate/CertificateForm';
import MainReservationForm from '../MainReservationForm/MainReservationForm';

export default function Layout(): JSX.Element {
  return (
    <body className="body">
      <Navbar />
      <VideoBlock />
      <DescriptionBlock />
      <Menu />
      <ShefBlock />
      <Carusel />
      <MainReservationForm />
      <Certificate />
      <Contacts />
      <Footer />
    </body>
  );
}
