import React, { useState } from "react";
import { Link } from "react-router-dom";

// type CertificateProps = {

// };

function Certificate(): JSX.Element {
  



  return (
    <div className="modal_sertificat">
      <div className="modal_data">
        {/* <div className=""> */}
        <label htmlFor="name">
          <p className="modal_name">Имя</p>
        <input type="text" className="modal_inp" name='name' placeholder="Имя"/>

        </label>
        {/* </div> */}
        <div className="modal_name">
        <p className="">Номер телефона</p>
        <input type="tel" className="modal_inp"  placeholder="Телефон"/>
        </div>
        <div className="modal_name">
        <p className="">Почта</p>
        <input type="email" className="modal_inp"  placeholder="Почта"/>
      </div>
      <div className="modal_name">
      <p className="">Сумма сертификата</p>
        <input type="text" className="modal_inp"  placeholder="Сумма"/>
      </div>
    </div>
    </div>
  );
}

export default Certificate;
