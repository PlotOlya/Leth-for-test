import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Admin } from './type/Admin';
import { AdminState } from './type/AdminState';
import * as api from './apiLogin';
import { RootState } from '../../store';

const initialState: AdminState = {
  authChecked: false,
  admin: undefined,
};

export const getUser = createAsyncThunk('AdminAuthorization/getUser', () =>
  api.admin()
);
console.log('getUser', getUser);

export const adminLogIn = createAsyncThunk(
  'AdminAuthorization/adminLogIn',
  async (admin: Admin) => {
    if (!admin.login.trim() || !admin.password.trim()) {
      throw new Error('Не все поля заполнены');
    }

    return api.apiLogin(admin);
  }
);

export const adminLogout = createAsyncThunk(
  'AdminAuthorization/adminLogot',
  api.apiAdminLogout
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(adminLogIn.fulfilled, (state, action) => {
        state.admin = action.payload;
        state.authChecked = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        console.log('action.payload', action.payload);

        state.authChecked = true;
        state.admin = action.payload.isLoggedIn
          ? action.payload.admin
          : undefined;
      })
      // 332 так изменяется стэйт если вернулась ошибка
      .addCase(adminLogIn.rejected, (state, action) => {
        //  handle error
        console.log(action.error);
      })
      .addCase(adminLogout.fulfilled, (state, action) => {
        state.admin = undefined;
      });
  },
});

export const getAdmin = (state: RootState): Admin => state.adminAuth.admin;

export default authSlice.reducer;
