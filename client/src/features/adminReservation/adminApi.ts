import { OneReservation } from './types/OneReservation';
import { ReservationState } from './types/ReservationState';

export async function apiInitTable(): Promise<ReservationState> {
  const res = await fetch('/api/admin/reservation');
  if (res.status >= 400) {
    const { error } = await res.json();
    throw error;
  }
  return res.json();
}

export async function apiUpdateTable(
  reserv: OneReservation
): Promise<OneReservation> {
  const res = await fetch(`/api/admin/reservation/${reserv.id}/update`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(reserv),
  });
  if (res.status >= 400) {
    const { error } = await res.json();
    throw error;
  }

  return res.json();
}
