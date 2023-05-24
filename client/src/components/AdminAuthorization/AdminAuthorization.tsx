import React, { memo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Admin } from "./type/Admin";
import { RootState, useAppDispatch } from "../../store";
import { CertificateData } from "../Certificate/type/CertificateData";
import { addCertificate } from "../Certificate/CertificateSlice";
import { login } from "./AdminAuthorizationSlice";
import './Admin.css'

function AdminAuthorization(): JSX.Element {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<Admin>();

  const dispatch = useAppDispatch();

  const certificate = useSelector(
    (state: RootState) => state.certificates.currentCertificate
  );

  const submitAdminAut = async (values: Admin): Promise<Admin> => {
    console.log(values);
    
    const dispatchResult = await dispatch(login(values));
    if (login.fulfilled.match(dispatchResult)) {
      reset();
    }
    if (login.fulfilled.match(dispatchResult)) {
      navigate('/admin/reservation');
    }
    return values;
  };

  return (
    <div className="conteiner">
    <form className="form_admin" onSubmit={handleSubmit(submitAdminAut)}>
      <div className="admin_div">
        <div className="admin_box">
          <p className="names">login</p>
          <input
            type="login"
            className="admin_inp"
            placeholder="login"
            {...register("login", { required: true })}
            name="login"
          />
        </div>
        <div className="admin_box">
          <p className="names">password</p>
          <input
            type="password"
            className="admin_inp"
            placeholder="passvord"
            {...register("password", { required: true })}
            name="password"
          />
        </div>
        <div>
          <button className="admin_button" type="submit">Войти</button>
        </div>
      </div>
    </form>
    </div>
  );
}

export default memo(AdminAuthorization);
