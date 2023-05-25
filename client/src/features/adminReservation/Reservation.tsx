import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ReservationDate from './ReservationDate';
import ReservationTable from './ReservationTable';
import ReservationList from './ReservationList';
import ReservationModal from './ReservationModal';
import MainReservationForm from '../../components/MainReservationForm/MainReservationForm';
import ReservationForm from './ReservationForm';
import styles from './styles.module.css';

function Reservation(): JSX.Element {
  const [showModal, setShowModal] = useState(false);
  const [activModalReserv, setActivModalReserv] = useState(0);
  const reservationList = useSelector(
    (state: RootState) => state.adminReservation.reservationList
  );
  return (
    <>
      <ReservationTable
        setShowModal={setShowModal}
        setActivModalReserv={setActivModalReserv}
      />
      <div className={styles.tableTwoCol}>
        <div className={styles.leftCol}>
          <h3>Список заявок на резерв</h3>
          {reservationList.length > 0
            ? reservationList.map((reserv) => (
                <div key={reserv.id} data-id={reserv.id}>
                  {reserv.table ? (
                    []
                  ) : (
                    <ReservationList
                      oneReserv={reserv}
                      setShowModal={setShowModal}
                      setActivModalReserv={setActivModalReserv}
                    />
                  )}
                </div>
              ))
            : []}
        </div>
        <ReservationModal
          showModal={showModal}
          setShowModal={setShowModal}
          activModalReserv={activModalReserv}
        />
        <div className={styles.rightCol}>
          <ReservationForm />
        </div>
      </div>
    </>
  );
}

export default memo(Reservation);
