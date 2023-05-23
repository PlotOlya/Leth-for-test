
import React from 'react'
import './Layout.css'
import Footer from '../Footer/Footer'
import Contacts from '../Contacts/Contacts'
import Navbar from '../Navbar/Navbar'
import VideoBlock from '../VideoBlock/VideoBlock'
import MainReservationForm from '../ReservationForm/MainReservationForm'


export default function Layout(): JSX.Element {
  return (
    <main className='body'>
        <Navbar />
        <VideoBlock />
        <MainReservationForm />
        <Contacts/>
        <Footer/>
    </main>
  );
}
