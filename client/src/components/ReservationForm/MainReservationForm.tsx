/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react/jsx-props-no-spreading */
import React, { memo, useState } from "react";
import "./MainReservationForm.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../store";
import { addReservation } from "./mainReservationFormSlice";
import MainReservationData from "./types/MainReservationData";

function MainReservationForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const [message, setMessage] = useState<boolean>(false);
  const [toggleRegisterForm, setToggleRegisterForm] = useState<boolean>(false)

  const { register, handleSubmit, reset } = useForm<MainReservationData>();

  const submitHandler: SubmitHandler<MainReservationData> = async (
    data
  ): Promise<void> => {
    console.log(data);
    const { name, number, email, date, time, guests, comment } = data;
    const dispatchResult = await dispatch(
      addReservation({
        name,
        number,
        email,
        date,
        time,
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

  const registerFormHandle = ():void => {
    setToggleRegisterForm((prev) => !prev)
  }

  const closeButtonHandle = ():void => {
    setMessage(false);
  }

  return (
    <div className='form_container'>
    <button id='mainReservationForm' className="button_certificate" type='button' onClick={registerFormHandle}>ЗАБРОНИРОВАТЬ</button>

    <form  onSubmit={handleSubmit(submitHandler)} className={toggleRegisterForm ? 'reservationFormer_active' : 'reservationFormer_inactive'}>
      <label className="reservationFormLabel" htmlFor="name">
        Имя
        <input
          {...register("name")}
          className="reservationFormInput"
          type="text"
          name="name"
          required
        />
      </label>
      <label className="reservationFormLabel" htmlFor="number">
        Номер телефона
        <input
          {...register("number")}
          className="reservationFormInput"
          type="text"
          name="number"
          required
        />
      </label>
      <label className="reservationFormLabel" htmlFor="email">
        Адрес электронной почты
        <input
          {...register("email")}
          className="reservationFormInput"
          type="email"
          name="email"
          required
        />
      </label>
      <label className="reservationFormLabel" htmlFor="date">
        Дата
        <input
          {...register("date")}
          className="reservationFormInput"
          type="date"
          name="date"
        />
      </label>
      <label className="reservationFormLabel" htmlFor="time">
        Время
        <select {...register("time")} className="reservationFormInput" required>
          <option value="12:00">12:00</option>
          <option value="12:30">12:30</option>
          <option value="13:00">13:00</option>
          <option value="13:30">13:30</option>
          <option value="14:00">14:00</option>
          <option value="14:30">14:30</option>
          <option value="15:00">15:00</option>
          <option value="15:30">15:30</option>
          <option value="16:00">16:00</option>
          <option value="16:30">16:30</option>
          <option value="17:00">17:00</option>
          <option value="17:30">17:30</option>
          <option value="18:00">18:00</option>
          <option value="18:30">18:30</option>
          <option value="19:00">19:00</option>
          <option value="19:30">19:30</option>
          <option value="20:00">20:00</option>
          <option value="20:30">20:30</option>
          <option value="21:00">21:00</option>
          <option value="21:30">21:30</option>
          <option value="22:00">22:00</option>
          <option value="22:30">22:30</option>
          <option value="23:00">23:00</option>
        </select>
      </label>
      <label className="reservationFormLabel" htmlFor="select">
        Количество персон
        <select
          {...register("guests")}
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
          {...register("comment")}
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
          <button onClick={closeButtonHandle} type='button' className='message-close-button'>❌</button>
        </div>
      )}
    </form>
  </div>
  );
}

export default memo(MainReservationForm);
