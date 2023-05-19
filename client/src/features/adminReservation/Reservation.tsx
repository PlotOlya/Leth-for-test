import React from 'react';
import ReservationDate from './ReservationDate';
// import ReservationList from './ReservationList';
import ReservationTable from './ReservationTable';

function Reservation(): JSX.Element {
  return (
    <>
      <ReservationDate />
      <ReservationTable />
      {/* <ReservationList /> */}
    </>
  );
}

export default Reservation;
