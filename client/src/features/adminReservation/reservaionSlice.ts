/* eslint-disable import/no-cycle */
import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { apiInitTable, apiUpdateTable } from './api';
import { OneReservation } from './types/OneReservation';
import { ReservationData } from './types/ReservationData';
import { ReservationState } from './types/ReservationState';
import { Tables } from './types/Tables';

const initialState: ReservationState = {
  tablesList: [],
  reservationList: [],
};

export const initTimeTable = createAsyncThunk(
  'adminReservation/initTimeTable',
  async () => {
    const timeTable = await apiInitTable();

    return timeTable;
  }
);

export const updateReserv = createAsyncThunk(
  'adminReservation/updateReserv',
  async (value: OneReservation) => {
    const newReserv = await apiUpdateTable(value);
    return newReserv;
  }
);

const timeTableSlice = createSlice({
  name: 'timeTables',
  initialState,
  reducers: {},
  extraReducers(builder) {
    return builder
      .addCase(initTimeTable.fulfilled, (state, action) => {
        state.tablesList = action.payload.tablesList;
        state.reservationList = action.payload.reservationList;
      })
      .addCase(updateReserv.fulfilled, (state, action) => {
        state.reservationList = state.reservationList.map((reserv) =>
          reserv.id === action.payload.id ? action.payload : reserv
        );
      });
  },
});

export const selectTablesList = (state: RootState): Tables[] =>
  state.adminReservation.tablesList;

export const selectReservationList = (state: RootState): OneReservation[] =>
  state.adminReservation.reservationList;

export const selectReservationById = createSelector(
  [selectReservationList, (state: RootState, reservId: number) => reservId],
  (reservationList, reservId) =>
    reservationList.find((el) => el.id === reservId)
);

export default timeTableSlice.reducer;
