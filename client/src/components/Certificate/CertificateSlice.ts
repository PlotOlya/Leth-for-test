import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CertificateState } from "./type/CertificateState";
import { CertificateData } from "./type/CertificateData";
import { apiCertificate, apiInitCertificate } from "./api";

const initialState: CertificateState = {
  certificateList: [],
  currentCertificate: undefined,
};

export const addCertificate = createAsyncThunk(
  "certificate/addCertificate",
  async (certificate: CertificateData) => {
    const newCertificate = await apiCertificate(certificate);
    return newCertificate;
  }
);
export const initCertificate = createAsyncThunk(
  "certificate/initCertificate",
  async () => {
    const newCertificate = await apiInitCertificate();
    console.log(newCertificate);
    return newCertificate;
  }
);

const certificateSlice = createSlice({
  name: "certificates",
  initialState,
  reducers: {},
  extraReducers(builder) {
    return builder
      .addCase(addCertificate.fulfilled, (state, action) => {
        // console.log("slise ->", action.payload);

        state.certificateList.push(action.payload);
        state.currentCertificate = action.payload.amount;
        // console.log("state", state.currentCertificate);
      })
      .addCase(initCertificate.fulfilled, (state, action) => {
        console.log("slise init->", action.payload);
        state.certificateList = action.payload;
      });
  },
});

export default certificateSlice.reducer;
