import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ReservationDate from './ReservationDate';
import ReservationTable from './ReservationTable';
import ReservationList from './ReservationList';
import ReservationModal from './ReservationModal';

function Reservation(): JSX.Element {
  const [showModal, setShowModal] = useState(false);
  const [activModalReserv, setActivModalReserv] = useState(0);
  const reservationList = useSelector(
    (state: RootState) => state.adminReservation.reservationList
  );
  return (
    <>
      <ReservationDate />
      <ReservationTable
        setShowModal={setShowModal}
        setActivModalReserv={setActivModalReserv}
      />
      {reservationList.length > 0
        ? reservationList.map((reserv) => (
            <div key={reserv.id} data-id={reserv.id}>
              <ReservationList
                oneReserv={reserv}
                setShowModal={setShowModal}
                activModalReserv={activModalReserv}
                setActivModalReserv={setActivModalReserv}
              />
            </div>
          ))
        : []}
      <ReservationModal
        showModal={showModal}
        setShowModal={setShowModal}
        activModalReserv={activModalReserv}
      />
    </>
  );
}

export default Reservation;
