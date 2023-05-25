import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { formatDate, formatTime } from '../../utils/date';
import { OneReservation } from './types/OneReservation';

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

  return (
    <Card>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          {`Имя гостя: ${oneReserv.name}
           Номер телефона: ${oneReserv.phoneNumber}
           Почта гостя: ${oneReserv.email}
           Дата брони: ${normDate}
           Время брони: ${normTime}
           Номер стола: ${oneReserv.table}
           `}
        </Card.Text>
        <Button type="button" onClick={() => handleModal(oneReserv.id)}>
          Открыть резерв
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ReservationList;
