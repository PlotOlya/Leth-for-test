import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiinitTimeTable } from './api';
import { ReservationState } from './types/ReservationState';

const initialState: ReservationState = {
  timeList: [],
  tablesList: [],
  reservationList: [],
};

export const initTimeTable = createAsyncThunk(
  'timeTable/initTimeTable',
  async () => {
    const timeTable = await apiinitTimeTable();

    return timeTable;
  }
);

const timeTableSlice = createSlice({
  name: 'timeTables',
  initialState,
  reducers: {},
  extraReducers(builder) {
    return builder.addCase(initTimeTable.fulfilled, (state, action) => {
      state.timeList = action.payload.timeList;
      state.tablesList = action.payload.tablesList;
      state.reservationList = action.payload.reservationList;
    });
  },
});

export default timeTableSlice.reducer;