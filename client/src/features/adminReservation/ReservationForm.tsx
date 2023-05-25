/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react/jsx-props-no-spreading */
import React, { memo, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../store';
import { addReservation } from '../../components/MainReservationForm/mainReservationFormSlice';
import MainReservationData from '../../components/MainReservationForm/types/MainReservationData';
import styles from './styles.module.css';

function ReservationForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const [message, setMessage] = useState<boolean>(false);

  const { register, handleSubmit, reset } = useForm<MainReservationData>();

  const submitHandler: SubmitHandler<MainReservationData> = async (
    data
  ): Promise<void> => {
    const { name, number, email, table, date, time, guests, comment } = data;
    const dispatchResult = await dispatch(
      addReservation({
        name,
        number,
        email,
        date,
        time,
        guests,
        comment,
        table,
        status: false,
      })
    );

    if (addReservation.fulfilled.match(dispatchResult)) {
      reset();
      setMessage((prev) => !prev);
    }
  };

  return (
    <div className="form_container">
      <Form
        onSubmit={handleSubmit(submitHandler)}
        className={styles.modalform}
        onClick={(e) => e.stopPropagation()}
      >
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              {...register('email')}
              type="text"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control
              {...register('name')}
              type="text"
              placeholder="Name"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group className="mb-3" controlId="formGridCity">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              {...register('number')}
              type="phone"
              placeholder="Phone"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Guests</Form.Label>
            <Form.Control {...register('guests')} type="text" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Date</Form.Label>
            <Form.Control {...register('date')} type="date" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Time</Form.Label>
            <Form.Select {...register('time')}>
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
            <Form.Control {...register('table')} type="text" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control {...register('comment')} as="textarea" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Button
        </Button>
      </Form>
    </div>
  );
}

export default memo(ReservationForm);
