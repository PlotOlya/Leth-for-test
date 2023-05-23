import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import timeTableSlice from './features/adminReservation/reservaionSlice';
import  MainReservationSlice  from './components/ReservationForm/mainReservationFormSlice'


const store = configureStore({
  reducer: {
    adminReservation: timeTableSlice,
    mainReservationForm: MainReservationSlice
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
