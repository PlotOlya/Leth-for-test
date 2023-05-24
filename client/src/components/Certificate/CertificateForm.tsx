import React, { memo, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import "./Certificate.css";
import { Certificate } from "./type/Certificate";
import store, { RootState, useAppDispatch } from "../../store";
import { addCertificate } from "./CertificateSlice";
import { CertificateData } from "./type/CertificateData";
import YooKassa from "../YooKassa/YooKassa";

// type CertificateProps = {

// };

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

  return (
    <div className="main_certificate">
      <div>
        <button
          type="button"
          onClick={() => setModalSertificat(!modalSertificat)}
          className="button_certificate"
        >
          {" "}
          Оформить сертификат{" "}
        </button>
      </div>
      <form
        className="modal_certificat"
        onSubmit={handleSubmit(submitFormValues)}
      >
        <div
          className={
            modalSertificat ? "modal_data_activ" : "modal_data_deactiv"
          }
        >
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
          <button type="submit" className="design_button">
            Оформить
          </button>
          <YooKassa certificate={certificate} />
        </div>
      </form>
    </div>
  );
}

export default memo(CertificateForm);
