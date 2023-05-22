/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { memo, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import Timeline, {
  TimelineMarkers,
  CustomMarker,
  TodayMarker,
  CursorMarker,
} from 'react-calendar-timeline';
import moment from 'moment';
import { Modal } from 'react-bootstrap';
import { RootState, useAppDispatch } from '../../store';
import { initTimeTable } from './reservaionSlice';
import styles from './styles.module.css';
import 'react-calendar-timeline/lib/Timeline.css';
import ReservationModal from './ReservationModal';

function ReservationTable(): JSX.Element {
  const [showModal, setShowModal] = useState(false);
  const [activModalReserv, setActivModalReserv] = useState(0);
  const dispatch = useAppDispatch();
  const timeList = useSelector(
    (state: RootState) => state.adminReservation.timeList
  );
  const tablesList = useSelector(
    (state: RootState) => state.adminReservation.tablesList
  );
  const reservationList = useSelector(
    (state: RootState) => state.adminReservation.reservationList
  );
  console.log('время', timeList);
  console.log('столы', tablesList);
  console.log('резервы', reservationList);

  useEffect(() => {
    dispatch(initTimeTable());
  }, [dispatch]);

  const groups = tablesList.map((table) => ({
    id: table.id,
    title: `Стол ${table.number}`,
  }));

  const addHours = (originalDate: Date, hoursToAdd = 2): Date => {
    const newDate = new Date(originalDate);
    const newHours = newDate.getHours() + hoursToAdd;
    newDate.setHours(newHours);

    return newDate;
  };

  const items = reservationList.map((reserv) => ({
    id: reserv.id,
    group: reserv.table_id,
    title: reserv.name,
    start_time: new Date(reserv.date),
    end_time: addHours(reserv.date),
  }));

  const today = Date.now();
  const handleModal = (itemId: number): void => {
    setShowModal(true);
    console.log('click');
    console.log(showModal);
    setActivModalReserv(itemId);
  };

  return (
    <>
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={moment().add(-6, 'hour')}
        defaultTimeEnd={moment().add(6, 'hour')}
        onItemClick={handleModal}
      >
        <TimelineMarkers>
          <TodayMarker />
          <CustomMarker date={today} />

          <CursorMarker />
        </TimelineMarkers>
      </Timeline>
      <br />
      <br />
      <ReservationModal
        showModal={showModal}
        setShowModal={setShowModal}
        activModalReserv={activModalReserv}
        setActivModalReserv={setActivModalReserv}
      />
    </>
  );
}

export default memo(ReservationTable);
