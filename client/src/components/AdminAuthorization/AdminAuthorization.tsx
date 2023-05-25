import React, { memo } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Admin } from './type/Admin';
import { useAppDispatch } from '../../store';
import { adminLogIn } from './AdminAuthorizationSlice';
import './Admin.css';

function AdminAuthorization(): JSX.Element {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<Admin>();
  const dispatch = useAppDispatch();

  const submitAdminAut = async (values: Admin): Promise<Admin> => {
    console.log(values);

    const dispatchResult = await dispatch(adminLogIn(values));
    if (adminLogIn.fulfilled.match(dispatchResult)) {
      reset();
    }
    if (adminLogIn.fulfilled.match(dispatchResult)) {
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
              {...register('login', { required: true })}
              name="login"
            />
          </div>
          <div className="admin_box">
            <p className="names">password</p>
            <input
              type="password"
              className="admin_inp"
              placeholder="password"
              {...register('password', { required: true })}
              name="password"
            />
          </div>
          <div>
            <button className="admin_button" type="submit">
              Войти
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default memo(AdminAuthorization);
