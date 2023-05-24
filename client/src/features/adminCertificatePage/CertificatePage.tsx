import React, { memo, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import {
  findeCertificate,
  initCertificate,
  updateCertificate,
} from '../../components/Certificate/CertificateSlice';
import CertificateItem from './CertificateItem';
import './CertificateItem.css';

function CertificatePage(): JSX.Element {
  const dispatch = useAppDispatch();

  const oneCertificat = useSelector(
    (state: RootState) => state.certificates.oneCertificate
  );

  const [inputVal, setInputVal] = useState('');
  const handelInput: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    setInputVal(e.target.value);
  };

  const handlerSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();
      await dispatch(findeCertificate(inputVal));
    },
    [dispatch, inputVal]
  );
  const [statusVal, setStatusVal] = useState(oneCertificat?.status);

  const handlerCklick = (): void => {
    if (oneCertificat) {
      setStatusVal(false);
      dispatch(updateCertificate(oneCertificat));
      setInputVal('');
    }
  };

  useEffect(() => {
    dispatch(initCertificate());
  }, [dispatch]);

  return (
    <div className="certificate-container">
      <form onSubmit={handlerSubmit}>
        <p>Проверка сертификата</p>
        <input
          type="text"
          placeholder="номер сертификата"
          value={inputVal}
          onChange={(e) => handelInput(e)}
        />
        <button type="submit">Найти</button>
      </form>
      {oneCertificat && (
        <div className="found-certificate">
          <div>Имя: {oneCertificat?.name}</div>
          <div>Номер сертификата:{oneCertificat?.numberCertificates}</div>
          <div>Сумма: {oneCertificat?.amount}</div>
          <div>Email: {oneCertificat?.email}</div>
          <div>Status: {oneCertificat?.status ? 'activ' : 'pasiv'}</div>

          <button type="button" onClick={handlerCklick}>
            Использовать
          </button>
        </div>
      )}

      <CertificateItem />
    </div>
  );
}

export default memo(CertificatePage);
