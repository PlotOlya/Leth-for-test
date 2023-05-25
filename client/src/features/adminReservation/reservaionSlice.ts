/* eslint-disable import/no-cycle */
import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { type RootState } from '../../store';
import {
  apiDeleteReserv,
  apiInitTable,
  apiSendMessage,
  apiUpdateTable,
} from './adminApi';
import { OneReservation, ReservId } from './types/OneReservation';
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

export const sendMail = createAsyncThunk(
  'adminReservation/sendMail',
  async (reserv: OneReservation) => {
    const sendmail = await apiSendMessage(reserv);
    if (!sendmail) {
      throw new Error('Сообщение не отправлено');
    }
  }
);

export const deleteReserv = createAsyncThunk(
  'adminReservation/deleteReserv',
  async (id: ReservId) => {
    console.log('id thunk', id);

    await apiDeleteReserv(id);
    return id;
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
      })
      .addCase(deleteReserv.fulfilled, (state, action) => {
        state.reservationList = state.reservationList.filter(
          (reserv) => reserv.id !== action.payload
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
