/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react/jsx-props-no-spreading */
import React, { memo, useState } from 'react';
import './MainReservationForm.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../store';
import { addReservation } from './mainReservationFormSlice';
import MainReservationData from './types/MainReservationData';

type Time = {
  time: string;
  status: boolean;
}

const timetable = [
  {time: "12:00", status: true},
  {time: "12:30", status: true},
  {time: "13:00", status: true},
  {time: "13:30", status: true},
  {time: "14:00", status: true},
  {time: "14:30", status: true},
  {time: "15:00", status: true},
  {time: "15:30", status: true},
  {time: "16:00", status: true},
  {time: "16:30", status: true},
  {time: "17:00", status: true},
  {time: "17:30", status: true},
  {time: "18:00", status: true},
  {time: "18:30", status: true},
  {time: "19:00", status: true},
  {time: "19:30", status: true},
  {time: "20:00", status: true},
  {time: "20:30", status: true},
  {time: "21:00", status: true},
  {time: "21:30", status: true},
  {time: "22:00", status: true},
  {time: "22:30", status: true},
]

function MainReservationForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const [message, setMessage] = useState<boolean>(false);
  const [toggleRegisterForm, setToggleRegisterForm] = useState<boolean>(false);
  const [timeState, setTimeState] = useState<Time[]>(timetable)

  const { register, handleSubmit, reset } = useForm<MainReservationData>();

  const submitHandler: SubmitHandler<MainReservationData> = async (
    data
  ): Promise<void> => {
    const { name, number, table, email, date, time, guests, comment } = data;
    const dispatchResult = await dispatch(
      addReservation({
        name,
        number,
        email,
        date,
        time,
        table,
        guests,
        comment,
        status: false,
      })
    );

    if (addReservation.fulfilled.match(dispatchResult)) {
      reset();
      setMessage((prev) => !prev);
    }
  };

  const registerFormHandle = (): void => {
    setToggleRegisterForm((prev) => !prev);
  };

  const closeButtonHandle = (): void => {
    setMessage(false);
  };

  

  return (
    <div className="form_container" id="mainReservationForm">
      <div className='reservation-text'>Уважаемые гости нашего ресторана! Просим обратить внимание на то, что посещение ограничено 2 часами!</div>

      <button
        
        className="button_certificate"
        type="button"
        onClick={registerFormHandle}
      >
        ЗАБРОНИРОВАТЬ
      </button>

      <form
        onSubmit={handleSubmit(submitHandler)}
        className={
          toggleRegisterForm
            ? 'reservationFormer_active'
            : 'reservationFormer_inactive'
        }
      >
        <label className="reservationFormLabel" htmlFor="name">
          Имя
          <input
            {...register('name')}
            className="reservationFormInput"
            type="text"
            name="name"
            required
          />
        </label>
        <label className="reservationFormLabel" htmlFor="number">
          Номер телефона
          <input
            {...register('number')}
            className="reservationFormInput"
            type="text"
            name="number"
            required
          />
        </label>
        <label className="reservationFormLabel" htmlFor="email">
          Адрес электронной почты
          <input
            {...register('email')}
            className="reservationFormInput"
            type="email"
            name="email"
            required
          />
        </label>
        <label className="reservationFormLabel" htmlFor="date">
          Дата
          <input
            {...register('date')}
            className="reservationFormInput"
            type="date"
            name="date"
          />
        </label>
        <label className="reservationFormLabel" htmlFor="time">
          Время
          <select
            {...register('time')}
            className="reservationFormInput"
            required
          >
            {timetable.map((time) => (
                time.status ? ( <option key={time.time} value={time.time}>{time.time}</option> ) 
                  : 
                 ( <option disabled value={time.time}>{time.time}</option> )
            )
              )
            }
          </select>
        </label>
        <label className="reservationFormLabel" htmlFor="select">
          Количество персон
          <select
            {...register('guests')}
            className="reservationFormInput"
            required
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option>
            <option value={13}>13</option>
            <option value={14}>14</option>
            <option value={15}>15</option>
          </select>
        </label>
        <label className="reservationFormLabel" htmlFor="comment">
          Комментарий
          <textarea
            {...register('comment')}
            className="reservationFormInput"
            name="comment"
          />
        </label>
        <button className="reservationFormButton" type="submit">
          Забронировать
        </button>
        {message && (
          <div className="message">
            Ваша заявка отправлена, ожидайте подтверждения от ресторана
            <button
              onClick={closeButtonHandle}
              type="button"
              className="message-close-button"
            >
              х
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default memo(MainReservationForm);
