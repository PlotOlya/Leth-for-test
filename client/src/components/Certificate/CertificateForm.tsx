
import React, { memo, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import './Certificate.css';
import { Certificate } from './type/Certificate';
import store, { RootState, useAppDispatch } from '../../store';
import { addCertificate } from './CertificateSlice';
import { CertificateData } from './type/CertificateData';
import YooKassa from '../YooKassa/YooKassa';


function CertificateForm(): JSX.Element {
  const { register, handleSubmit, reset } = useForm<CertificateData>();
  const [modalSertificat, setModalSertificat] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const certificate = useSelector(
    (state: RootState) => state.certificates.currentCertificate
  );

  const submitFormValues = useCallback(
    async (values: CertificateData): Promise<number> => {
      const dispatchResult = await dispatch(addCertificate(values));
      if (addCertificate.fulfilled.match(dispatchResult)) {
        reset();
      }
      // console.log(values.amount);
      const defaultInput = values.amount;
      return defaultInput;
    },
    [dispatch]
  );

  const [toggle, setToggle] = useState(false);

  const handlerClick = (): void => {
    setToggle(!toggle);
  };

  // fsafas
  return (
    <div id="certificate" className="main_certificate">
      <div>
        <button
          type="button"
          onClick={() => setModalSertificat(!modalSertificat)}
          className="button_certificate"
        >
          {' '}
          Оформить сертификат{' '}
        </button>
      </div>

      <form
        className={!toggle ? 'modal_certificat' : 'modal_certificat_diactive'}
        onSubmit={handleSubmit(submitFormValues)}
      >
        <div
          className={
            modalSertificat ? 'modal_data_activ' : 'modal_data_deactiv'
          }
        >
          <label htmlFor="name">
            <p className='reservationFormLabel'>Имя</p>
            <input
              type="text"
              className="reservationFormInput"
           
              {...register('name', { required: true })}
              name="name"
            />
          </label >
          <div className="modal_name">
            <p className='reservationFormLabel'>Почта</p>
            <input
              type="email"
              className="reservationFormInput"
              
              {...register('email', { required: true })}
              name="email"
            />
          </div>
          <div className="modal_name">
            <p className='reservationFormLabel'>Сумма сертификата</p>
            <input
              type="text"
              className="reservationFormInput"
             
              {...register('amount', { required: true })}
              name="amount"
            />
          </div>

          <button
            type="submit"
            className="reservationFormButton"
            onClick={handlerClick}
          >
            Подтвердить данные
          </button>
        </div>
      </form>
      {toggle && <YooKassa certificate={certificate} />}
    </div>
  );
}

export default memo(CertificateForm);
