import React from 'react';
import styles from './styles.module.css';
import CalendarView from '../../components/Calendar/CalendarView';

function ReservationDate(): JSX.Element {
  return (
    <div className={styles.calendar}>
      Тут будет календарь
      <CalendarView />
    </div>
  );
}

export default ReservationDate;
