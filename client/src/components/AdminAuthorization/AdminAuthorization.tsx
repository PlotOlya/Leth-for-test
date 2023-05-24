import React, { memo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Admin } from "./type/Admin";
import { RootState, useAppDispatch } from "../../store";
import { CertificateData } from "../Certificate/type/CertificateData";
import { addCertificate } from "../Certificate/CertificateSlice";
import { login } from "./AdminAuthorizationSlice";

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
    <form className="form_admin" onSubmit={handleSubmit(submitAdminAut)}>
      <div>
        <div>
          <p>login</p>
          <input
            type="login"
            placeholder="login"
            {...register("login", { required: true })}
            name="login"
          />
        </div>
        <div>
          <p>password</p>
          <input
            type="passvord"
            placeholder="passvord"
            {...register("password", { required: true })}
            name="password"
          />
        </div>
        <div>
          <button type="submit">Войти</button>
        </div>
      </div>
    </form>
  );
}

export default memo(AdminAuthorization);
