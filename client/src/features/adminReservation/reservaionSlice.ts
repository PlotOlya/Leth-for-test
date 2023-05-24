/* eslint-disable import/no-cycle */
import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { type RootState } from '../../store';
import { apiInitTable, apiUpdateTable } from './adminApi';
import { OneReservation } from './types/OneReservation';
import { ReservationState } from './types/ReservationState';
import { Tables } from './types/Tables';

const initialState: ReservationState = {
  tablesList: [],
  reservationList: [],
};

export const initReservationsTable = createAsyncThunk(
  'adminReservation/initTimeTable',
  async () => {
    const timeTable = await apiInitTable();
    if (!timeTable) {
      throw new Error('Не удолось загрузить данные');
    }

    return timeTable;
  }
);

export const updateReserv = createAsyncThunk(
  'adminReservation/updateReserv',
  async (value: OneReservation) => {
    const newReserv = await apiUpdateTable(value);
    if (!newReserv) {
      throw new Error('Не удалось загрузить данные ');
    }
    return newReserv;
  }
);

const timeTableSlice = createSlice({
  name: 'timeTables',
  initialState,
  reducers: {},
  extraReducers(builder) {
    return builder
      .addCase(initReservationsTable.fulfilled, (state, action) => {
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
