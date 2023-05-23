import { ReservationType } from './ReservationType';
import { Tables } from './Tables';
import { Time } from './Time';

export type ReservationState = {
  timeList: Time[];
  tablesList: Tables[];
  reservationList: ReservationType[];
};
