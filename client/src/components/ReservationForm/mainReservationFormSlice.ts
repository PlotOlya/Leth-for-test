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
    console.log('thunkthunk', mainReservation);
    console.log('thunk', newReservation);
    if (!newReservation) {
      throw new Error('Ошибка создания записи');
    }

    return newReservation;
  }
);

const mainReservationSlice = createSlice({
  name: 'mainReservations',
  initialState,
  // редьюсеры для синхронных операций
  reducers: {},
  // редьюсеры для санков (асинхронных операций)
  extraReducers(builder) {
    return (
      builder
        // начало выполнения loadMentors
        .addCase(addReservation.fulfilled, (state, action) => {
          state.MainReservationList.push(action.payload);
        })
    );
  },
});

// export const { clearAddMentorFormError } = mentorsSlice.actions;

export default mainReservationSlice.reducer;
