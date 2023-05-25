import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import MainReservationState from './types/MainReservationState';
import { apiAddReservation } from './api';
import MainReservationData from './types/MainReservationData';

const initialState: MainReservationState = {
  MainReservationList: [],
};

export const addReservation = createAsyncThunk(
  'reservations/addReservation',
  async (mainReservation: MainReservationData) => {
    const newReservation = await apiAddReservation(mainReservation);
    if (!newReservation) {
      throw new Error('Ошибка создания записи');
    }

    return newReservation;
  }
);

const mainReservationSlice = createSlice({
  name: 'mainReservations',
  initialState,
  reducers: {},
  extraReducers(builder) {
    return builder.addCase(addReservation.fulfilled, (state, action) => {
      state.MainReservationList.push(action.payload);
    });
  },
});

export default mainReservationSlice.reducer;
