import MainReservationData from './types/MainReservationData';
import MainReservation from './types/MainReservation';

export async function apiAddReservation(
  mainReservation: MainReservationData
): Promise<MainReservation> {
  const response = await fetch('/api/mainReservation', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(mainReservation),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return response.json();
}
