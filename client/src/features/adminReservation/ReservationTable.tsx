/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Timeline, {
  TimelineMarkers,
  CustomMarker,
  TodayMarker,
  CursorMarker,
} from 'react-calendar-timeline';
import moment from 'moment';
import { useAppDispatch } from '../../store';
import {
  initReservationsTable,
  selectReservationList,
  selectTablesList,
} from './reservaionSlice';
import 'react-calendar-timeline/lib/Timeline.css';
import styles from './styles.module.css';

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setActivModalReserv: React.Dispatch<React.SetStateAction<number>>;
};

function ReservationTable({
  setShowModal,
  setActivModalReserv,
}: Props): JSX.Element {
  const dispatch = useAppDispatch();

  const tablesList = useSelector(selectTablesList);
  const reservationList = useSelector(selectReservationList);

  console.log('столы', tablesList);
  console.log('резервы', reservationList);

  useEffect(() => {
    dispatch(initReservationsTable());
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
    group: reserv.table,
    title: reserv.name,
    start_time: new Date(reserv.date),
    end_time: addHours(reserv.date),
  }));

  const today = Date.now();
  const handleModal = (itemId: number): void => {
    setShowModal(true);
    setActivModalReserv(itemId);
  };

  return (
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
  );
}

export default memo(ReservationTable);
