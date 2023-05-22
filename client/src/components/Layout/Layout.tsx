
import React from 'react'
import './Layout.css'
import Footer from '../Footer/Footer'
import Contacts from '../Contacts/Contacts'
import Navbar from '../Navbar/Navbar'
import VideoBlock from '../VideoBlock/VideoBlock'
import Carusel from '../Carusel/Carusel'
import DescriptionBlock from '../descriptionBlock/descriptionBlock'


export default function Layout(): JSX.Element {
  return (
    <body className='body'>
        <Navbar />
        <VideoBlock />
        <DescriptionBlock/>
        <Carusel/>
        <Contacts/>
        <Footer/>
    </body>
  );
}
