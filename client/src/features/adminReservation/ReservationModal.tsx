/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { memo, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { formatDate } from '../../utils/formatDate';
import { formatTime } from '../../utils/formatTime';
import styles from './styles.module.css';

type Props = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  activModalReserv: number;
};

function ReservationModal({
  showModal,
  setShowModal,
  activModalReserv,
}: Props): JSX.Element {
  const [date, setDate] = useState('');
  const [normDate, setNormDate] = useState('');
  const [normTime, setNormTime] = useState('');

  // ???????????????
  const handleDate = (event: any): void => {
    setDate(event.target.value);
    // console.log(event.target.value);
  };

  const reserv = useSelector(
    (state: RootState) => state.adminReservation.reservationList
  );
  const item = reserv.filter((el) => el.id === activModalReserv);
  const item2 = { ...item[0] };
  const date2 = new Date(item2.date);

  useEffect(() => {
    setNormDate(formatDate(date2));
    setNormTime(formatTime(date2));
  }, [date2]);

  return (
    <div
      onClick={() => setShowModal(false)}
      className={showModal ? styles.activ : styles.disable}
    >
      {item && (
        <Form className={styles.modalform} onClick={(e) => e.stopPropagation()}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                defaultValue={item2.email}
                type="text"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control
                defaultValue={item2.name}
                type="text"
                placeholder="Name"
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              defaultValue={item2.phoneNumber}
              type="phone"
              placeholder="Phone"
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Date</Form.Label>
              <Form.Control
                defaultValue={normDate}
                onChange={(event) => handleDate(event)}
                // value={date}
                type="date"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Time</Form.Label>
              <Form.Select defaultValue={normTime}>
                <option>12:00</option>
                <option>12:30</option>
                <option>13:00</option>
                <option>13:30</option>
                <option>14:00</option>
                <option>14:30</option>
                <option>15:00</option>
                <option>15:30</option>
                <option>16:00</option>
                <option>16:30</option>
                <option>17:00</option>
                <option>17:30</option>
                <option>18:00</option>
                <option>18:30</option>
                <option>19:00</option>
                <option>19:30</option>
                <option>20:00</option>
                <option>20:30</option>
                <option>21:00</option>
                <option>21:30</option>
                <option>22:00</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Table</Form.Label>
              <Form.Control
                // value={date}
                onChange={(event) => handleDate(event)}
                type="text"
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control defaultValue={item2.comment} as="textarea" rows={3} />
          </Form.Group>

          <Button
            onClick={() => setShowModal(false)}
            variant="primary"
            type="button"
          >
            Button
          </Button>
        </Form>
      )}
    </div>
  );
}

export default memo(ReservationModal);
