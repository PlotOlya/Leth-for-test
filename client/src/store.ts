import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import timeTableSlice from './features/adminReservation/reservaionSlice';

const store = configureStore({
  reducer: {
    timeTables: timeTableSlice,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
