
import React from 'react'
import './Layout.css'
import Footer from '../Footer/Footer'
import Contacts from '../Contacts/Contacts'
import Navbar from '../Navbar/Navbar'
import VideoBlock from '../VideoBlock/VideoBlock'


export default function Layout(): JSX.Element {
  return (
    <body className='body'>
        <Navbar />
        <VideoBlock />
        <Contacts/>
        <Footer/>
    </body>
  );
}
