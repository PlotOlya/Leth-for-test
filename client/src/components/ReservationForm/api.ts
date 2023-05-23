import MainReservation from "./types/MainReservation";
import MainReservationData from "./types/MainReservationData";

export async function apiAddReservation(mainReservation: MainReservationData): Promise<MainReservation> {
    const response = await fetch('/api/mainReservation', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mainReservation),
    });

    console.log('api', response)
    
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }
    
      return response.json();
}