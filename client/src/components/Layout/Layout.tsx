import React from "react";
import "./Layout.css";
import Footer from "../Footer/Footer";
import Contacts from "../Contacts/Contacts";
import Navbar from "../NavBar/Navbar";
import VideoBlock from "../VideoBlock/VideoBlock";
import Carusel from "../Carusel/Carusel";
import DescriptionBlock from "../descriptionBlock/DescriptionBlock";
import Certificate from "../Certificate/CertificateForm";
import ShefBlock from "../ShefBlock/ShefBlock";

export default function Layout(): JSX.Element {
  return (
    <body className="body">
      <Navbar />
      <VideoBlock />
      <DescriptionBlock />
      <Carusel />
      <ShefBlock />
      <Contacts />
      <Certificate />
      <Footer />
    </body>
  );
}
