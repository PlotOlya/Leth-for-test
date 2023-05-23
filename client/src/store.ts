import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import timeTableSlice from './features/adminReservation/reservaionSlice';
import CertificateSlice from './components/Certificate/CertificateSlice';

const store = configureStore({
  reducer: {
    adminReservation: timeTableSlice,
    certificates: CertificateSlice ,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
