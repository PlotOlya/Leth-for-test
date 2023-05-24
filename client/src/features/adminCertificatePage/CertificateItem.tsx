import React, { memo } from "react";
import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "../../store";
import "./CertificateItem.css"

function CertificateItem(): JSX.Element {
  const currentCertificates = useSelector(
    (state: RootState) => state.certificates.certificateList
  );

  return (
    <div className="all-certificate">
      {currentCertificates.map((el) =>
        el.status ? (
          <div className="activ-certificate">
            <div key={el.id}>
              <div>Имя: {el.name}</div>
              <div>Номер сертификата: {el.numberCertificates}</div>
              <div>Сумма: {el.amount}</div>
              <button type="submit">Использовать</button>
            </div>
          </div>
        ) : (
          <div>
            <div key={el.id} className="passiv-certificate">
              <div>Имя: {el.name}</div>
              <div>Номер сертификата: {el.numberCertificates}</div>
              <div>Сумма: {el.amount}</div>
              <div>Статус :{el.status}</div>
              <button type="submit">Использовать</button>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default memo(CertificateItem);
