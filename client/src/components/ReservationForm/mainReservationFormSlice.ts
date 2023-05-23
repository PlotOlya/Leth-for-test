import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import MainReservationState from "./types/MainReservationState";
import MainReservation from './types/MainReservation';
import { apiAddReservation } from './api'

const initialState: MainReservationState = {
    MainReservationList: [],
  };

  export const addReservation = createAsyncThunk(
    'reservations/addReservation',
    async (mainReservation: MainReservation) => {
      const newReservation = await apiAddReservation(mainReservation);
      
      console.log('thunk', mainReservation);
      
      return newReservation;
    }
  );

const mainReservationSlice = createSlice({
    name: 'mainReservations',
    initialState,
    // редьюсеры для синхронных операций
    reducers: {
    //   clearAddMentorFormError(state) {
    //     state.addMentorFormError = undefined;
    //   },
    },
    // редьюсеры для санков (асинхронных операций)
  extraReducers(builder) {
    return (
      builder
        // начало выполнения loadMentors
        .addCase(addReservation.fulfilled, (state, action) => {
          state.MainReservationList.push(action.payload);

        })
    )
  }
})

    // export const { clearAddMentorFormError } = mentorsSlice.actions;

    export default mainReservationSlice.reducer;