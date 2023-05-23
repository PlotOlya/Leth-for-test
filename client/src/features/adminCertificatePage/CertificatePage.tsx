import React, { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import { initCertificate } from "../../components/Certificate/CertificateSlice";


function CertificatePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCertificates = useSelector(
    (state: RootState) => state.certificates.certificateList
  );
  useEffect(()=>{
    dispatch(initCertificate())
  }, [dispatch])
  console.log(currentCertificates);

  return (
    <div className="certificate-container">
      <form>
        <input type="text" placeholder="номер сертификата" />
        <button type="submit">Найти</button>
      </form>
      <div className="found-certificate">
        <div>Имя</div>
        <div>Номер сертификата</div>
        <div>Сумма</div>
        <button type="submit">Использовать</button>
      </div>
      <div className="found-certificate">
        List from server
        {currentCertificates.map((el) => (
          <li key={el.id}>
            <div>Имя: {el.name}</div>
            <div>Номер сертификата: {el.numberCertificates}</div>
            <div>Сумма: {el.amount}</div>
            <button type="submit">Использовать</button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default memo(CertificatePage);
