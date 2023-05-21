import { ReservationState } from './types/ReservationState';

export async function apiinitTimeTable(): Promise<ReservationState> {
  const res = await fetch('/api/admin/reservation');
  return res.json();
}
