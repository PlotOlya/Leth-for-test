import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { formatDate } from '../../utils/formatDate';
import { formatTime } from '../../utils/formatTime';
import { ReservationType } from './types/ReservationType';

type Props = {
  oneReserv: ReservationType;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setActivModalReserv: React.Dispatch<React.SetStateAction<number>>;
  activModalReserv: number;
};

function ReservationList({
  oneReserv,
  setShowModal,
  setActivModalReserv,
  activModalReserv,
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
           Номер стола: 
           `}
        </Card.Text>
        <Button type="button" onClick={() => handleModal(oneReserv.id)}>
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ReservationList;
