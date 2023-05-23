import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CertificateState } from "./type/CertificateState";
import { CertificateData } from "./type/CertificateData";
import { apiCertificate } from "./api";

const initialState: CertificateState = {
  certificateList: [],
};

export const addCertificate = createAsyncThunk(
  "certificate/addCertificate",
  async (certificate: CertificateData) => {
    const newCertificate = await apiCertificate(certificate);
    return newCertificate;
  }
);

const certificateSlice = createSlice({
  name: "certificates",
  initialState,
  reducers: {},
  extraReducers(builder) {
    return builder.addCase(addCertificate.fulfilled, (state, action) => {
      state.certificateList.push(action.payload);
    });
  },
});

export default certificateSlice.reducer;
