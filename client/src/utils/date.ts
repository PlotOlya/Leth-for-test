import { OneReservation } from '../features/adminReservation/types/OneReservation';
import { ReservationData } from '../features/adminReservation/types/ReservationData';

export function formatDate(argumentDate: Date): string {
  const year = new Date(argumentDate).getFullYear();
  const month = String(new Date(argumentDate).getMonth() + 1).padStart(2, '0');
  const day = String(new Date(argumentDate).getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export function formatTime(argumentDate: Date): string {
  const hours = new Date(argumentDate).getHours();
  const minutes = new Date(argumentDate).getMinutes();

  return `${hours}:${minutes}`;
}

export function transformReservationToFormData(
  reserv: OneReservation
): ReservationData {
  const { name, phoneNumber, email, date, comment, table } = reserv;
  const formReserv: ReservationData = {
    name,
    phoneNumber,
    email,
    date: formatDate(date),
    time: formatTime(date),
    comment,
    table,
  };
  return formReserv;
}
