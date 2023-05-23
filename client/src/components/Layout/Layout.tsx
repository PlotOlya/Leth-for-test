
import React from 'react'
import './Layout.css'
import Footer from '../Footer/Footer'
import Contacts from '../Contacts/Contacts'
import Navbar from '../Navbar/Navbar'
import VideoBlock from '../VideoBlock/VideoBlock'
import Carusel from '../Carusel/Carusel'
import DescriptionBlock from "../descriptionBlock/DescriptionBlock"
import ShefBlock from '../ShefBlock/ShefBlock'
import MainReservationForm from '../ReservationForm/MainReservationForm'


export default function Layout(): JSX.Element {
  return (
    <main className='body'>
        <Navbar />
        <VideoBlock />
        <DescriptionBlock/>
        <ShefBlock/>
        <Carusel/>
        <MainReservationForm />
        <Contacts/>
        <Footer/>


    </main>
  );
}
