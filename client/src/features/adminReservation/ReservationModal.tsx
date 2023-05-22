/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { memo } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import styles from './styles.module.css';

type Props = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  activModalReserv: number;
  setActivModalReserv: React.Dispatch<React.SetStateAction<number>>;
};

function ReservationModal({
  showModal,
  setShowModal,
  activModalReserv,
  setActivModalReserv,
}: Props): JSX.Element {
  console.log(activModalReserv);

  const reserv = useSelector(
    (state: RootState) => state.adminReservation.reservationList
  );

  const item = reserv.filter((el) => el.id === activModalReserv);
  const item2 = item[0];

  console.log('222', item2);

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
                // defaultValue={item2.email}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="phone" placeholder="Phone" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Time</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>12:00</option>
                <option>12:30</option>
                <option>13:00</option>
                <option>13:30</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Table</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
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
