import React, { memo, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import "./Certificate.css";
import pwgen from "pwgen";
import { Certificate } from "./type/Certificate";
import store, { RootState, useAppDispatch } from "../../store";
import { addCertificate } from "./CertificateSlice";
import { CertificateData } from "./type/CertificateData";
import YooKassa from "../YooKassa/YooKassa";

// type CertificateProps = {

// };

function CertificateForm(): JSX.Element {
  const { register, handleSubmit, reset } = useForm<CertificateData>();

  const dispatch = useAppDispatch();

  const certificate = useSelector(
    (state: RootState) => state.certificates.currentCertificate
  );
  console.log("forma", certificate);

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
          <YooKassa certificate={certificate} />
        </div>
      </form>
    </>
  );
}

export default memo(CertificateForm);
