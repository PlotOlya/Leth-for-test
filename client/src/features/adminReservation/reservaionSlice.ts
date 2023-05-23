/* eslint-disable import/no-cycle */
import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { apiInitTable, apiUpdateTable } from './api';
import { OneReservation } from './types/OneReservation';
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
  async (reserv: OneReservation) => {
    const newReserv = await apiUpdateTable(reserv);
    return newReserv;
  }
);

const timeTableSlice = createSlice({
  name: 'timeTables',
  initialState,
  reducers: {},
  extraReducers(builder) {
    return builder.addCase(initTimeTable.fulfilled, (state, action) => {
      state.tablesList = action.payload.tablesList;
      state.reservationList = action.payload.reservationList;
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
