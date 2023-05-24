import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Admin } from "./type/Admin";
import { AdminState } from "./type/AdminState";
import * as api from "./apiLogin";

export const getUser = createAsyncThunk("auth/user", () => api.admin());

const initialState: AdminState = {
  authChecked: false,
  admin: undefined
};

export const login = createAsyncThunk("auth/login", async (admin: Admin) => {
  
  if (!admin.login.trim() || !admin.password.trim()) {
    throw new Error("Не все поля заполнены");
  }

  return api.apiLogin(admin);
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // .addCase(getUser.fulfilled, (state, action) => {
      //   state.authChecked = true;
      //   state.admin = action.payload
      //     ? action.payload
      //     : undefined;
      // })

      .addCase(login.fulfilled, (state, action) => {
        state.admin = action.payload;
        state.authChecked = true;
      })

      // 332 так изменяется стэйт если вернулась ошибка
      .addCase(login.rejected, (state, action) => {
        //  handle error
        console.log(action.error);
        
      });
  },
});
