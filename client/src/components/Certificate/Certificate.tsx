import React, { useState } from "react";
import { Link } from "react-router-dom";

type CertificateProps = {
  handleClose: React.MouseEventHandler<HTMLElement>;
};

function Certificate({ handleClose }: CertificateProps): JSX.Element {
  const [registration, setRegistration] = useState(false);



  return (
    <Link to="/"  className="anchor-links">
      СЕРТИФИКАТ
    </Link>

  );
}

export default Certificate;
