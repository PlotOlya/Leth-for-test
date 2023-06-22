import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { formatDate, formatTime } from '../../utils/date';
import { OneReservation } from './types/OneReservation';
import './styles.module.css'

type Props = {
  oneReserv: OneReservation;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setActivModalReserv: React.Dispatch<React.SetStateAction<number>>;
};

function ReservationList({
  oneReserv,
  setShowModal,
  setActivModalReserv,
}: Props): JSX.Element {
  const [normDate, setNormDate] = useState('');
  const [normTime, setNormTime] = useState('');

  const date2 = new Date(oneReserv.date);

  useEffect(() => {
    setNormDate(formatDate(date2));
    setNormTime(formatTime(date2));
  }, [date2]);

  const handleModal = (id: number): void => {
    setShowModal(true);
    setActivModalReserv(id);
  };

  const titles = {
    name: 'Имя гостя:',
    number: 'Номер телефона:',
    email: 'Почта гостя:',
    date: 'Дата брони:',
    time: 'Время брони:',
    table: 'Номер стола:',

  }

  return (

    <Card className='m-4'>
      {/* <Card.Header as="h5">Заявка на бронирование</Card.Header> */}
      <Card.Body>
        {/* <Card.Title></Card.Title> */}
        <Card.Text>
          <div className='reservation-card' >
            <p><b>Имя гостя:</b> {oneReserv.name}&nbsp;&nbsp;&nbsp;
            <b>Номер телефона:</b> {oneReserv.phoneNumber}&nbsp;&nbsp;&nbsp;
            <b>Почта гостя: </b> {oneReserv.email}&nbsp;&nbsp;&nbsp;
            <b>Дата брони:</b> {normDate}&nbsp;&nbsp;&nbsp;
            <b>Время брони:</b> {normTime}&nbsp;&nbsp;&nbsp;
            {/* <b>Номер стола:</b> {oneReserv.table} */}
            </p>
          </div>
          {/* {`Имя гостя: ${oneReserv.name}
           Номер телефона: ${oneReserv.phoneNumber}
           Почта гостя: ${oneReserv.email}
           Дата брони: ${normDate}
           Время брони: ${normTime}
           Номер стола: ${oneReserv.table}
           `} */}
        </Card.Text>
        <Button type="button" onClick={() => handleModal(oneReserv.id)}>
          Открыть резерв
        </Button>
      </Card.Body>
    </Card>
   
  );
}

export default ReservationList;
