import React, { memo, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import {
  findeCertificate,
  initCertificate,
} from "../../components/Certificate/CertificateSlice";

function CertificatePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCertificates = useSelector(
    (state: RootState) => state.certificates.certificateList
  );
  const oneCertificat = useSelector(
    (state: RootState) => state.certificates.oneCertificate
  );
  const [inputVal, setInputVal] = useState("");
  const handelInput: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    setInputVal(e.target.value);
  };
  console.log(inputVal);

  const handlerSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();
      await dispatch(findeCertificate(inputVal));
    },
    [dispatch, inputVal]
  );

  const handlerCklick = (): void => {
    // oneCertificat?.status = "netu";
  };

  useEffect(() => {
    dispatch(initCertificate());
  }, [dispatch]);
  //   console.log(currentCertificates);

  return (
    <div className="certificate-container">
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          placeholder="номер сертификата"
          value={inputVal}
          onChange={(e) => handelInput(e)}
        />
        <button type="submit">Найти</button>
      </form>
      <div className="found-certificate">
        <div>Имя: {oneCertificat?.name}</div>
        <div>Номер сертификата:{oneCertificat?.numberCertificates}</div>
        <div>Сумма: {oneCertificat?.amount}</div>
        <div>Email: {oneCertificat?.email}</div>
        <div>Status: {oneCertificat?.status}</div>

        <button type="submit" onClick={handlerCklick}>
          Использовать
        </button>
      </div>
      <div className="found-certificate">
        List from server
        {currentCertificates.map((el) => (
          <div key={el.id}>
            <div>Имя: {el.name}</div>
            <div>Номер сертификата: {el.numberCertificates}</div>
            <div>Сумма: {el.amount}</div>
            <button type="submit">Использовать</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(CertificatePage);
