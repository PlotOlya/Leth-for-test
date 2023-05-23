import React, { memo, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Certificate.css";
import pwgen from "pwgen";
import { Certificate } from "./type/Certificate";
import { useAppDispatch } from "../../store";
import { addCertificate } from "./CertificateSlice";
import { CertificateData } from "./type/CertificateData";
// type CertificateProps = {

// };

function CertificateForm(): JSX.Element {
  const { register, handleSubmit, reset} = useForm<CertificateData>();

  const dispatch = useAppDispatch();

  const submitFormValues = useCallback(
    async (values: CertificateData): Promise<void> => {
      const dispatchResult = await dispatch(addCertificate(values));
      if(addCertificate.fulfilled.match(dispatchResult)){
        reset()
      }
    },
    [dispatch]
  );


  return (
    <>
      <div>
        <button type="button"> Оформить сертификат </button>
      </div>
      <form
        className="modal_sertificat"
        onSubmit={handleSubmit(submitFormValues)}
      >
        <div className="modal_data">
          <label htmlFor="name">
            <p className="modal_name">Имя</p>
            <input
              type="text"
              className="modal_inp"
              placeholder="Имя"
              {...register("name", { required: true })}
              name="name"
            />
          </label>
          <div className="modal_name">
            <p className="">Почта</p>
            <input
              type="email"
              className="modal_inp"
              placeholder="Почта"
              {...register("email", { required: true })}
              name="email"
            />
          </div>
          <div className="modal_name">
            <p className="">Сумма сертификата</p>
            <input
              type="text"
              className="modal_inp"
              placeholder="Сумма"
              {...register("amount", { required: true })}
              name="amount"
            />
          </div>
          <button type="submit">Оформить</button>
        </div>
      </form>
    </>
  );
}

export default memo(CertificateForm);
