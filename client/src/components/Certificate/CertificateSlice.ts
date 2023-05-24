import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CertificateState } from "./type/CertificateState";
import { CertificateData } from "./type/CertificateData";
import {
  apiCertificate,
  apiFindCertificate,
  apiInitCertificate,
  apiUpdateCertificate,
} from "./api";
import { Certificate } from "./type/Certificate";
// import { Certificate } from "./type/Certificate";

const initialState: CertificateState = {
  certificateList: [],
  currentCertificate: undefined,
  oneCertificate: undefined,
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

    return newCertificate;
  }
);
export const findeCertificate = createAsyncThunk(
  "certificate/findCertificate",
  async (inputVal: string) => {
    const certificate = await apiFindCertificate(inputVal);
    return certificate;
  }
);

export const updateCertificate = createAsyncThunk(
  "certificate/updateCertificate",
  async (certificate: Certificate) => {
    const chengeCertificate = await apiUpdateCertificate(certificate);
    return chengeCertificate;
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
        console.log("state", state.currentCertificate);
      })
      .addCase(initCertificate.fulfilled, (state, action) => {
        // console.log("slise init->", action.payload);
        state.certificateList = action.payload;
      })
      .addCase(findeCertificate.fulfilled, (state, action) => {
        // console.log("slise init->", action.payload);
        state.oneCertificate = action.payload;
      })
      .addCase(updateCertificate.fulfilled, (state, action) => {
        console.log("slise init->", action.payload);
        // state.certificateList = state.certificateList.map((el) =>
        //   el.id === action.payload.id ? action.payload : el
        // );
      });
  },
});

export default certificateSlice.reducer;
