import { OneReservation } from './types/OneReservation';
import { ReservationState } from './types/ReservationState';

export async function apiInitTable(): Promise<ReservationState> {
  const res = await fetch('/api/admin/reservation');
  console.log(res);

  return res.json();
}

export async function apiUpdateTable(
  reserv: OneReservation
): Promise<OneReservation> {
  const res = await fetch(`/api/admin/reservation/${reserv.id}/update`, {
    method: 'PUT',
    headers: { 'content-type': 'applisation/json' },
    body: JSON.stringify({ reserv }),
  });
  return res.json();
}
