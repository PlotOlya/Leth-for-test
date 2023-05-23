/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react/jsx-props-no-spreading */
import React, { memo } from "react";
import "./MainReservationForm.css";
import { SubmitHandler, useForm } from "react-hook-form";
import MainReservation from "./types/MainReservation";
import { useAppDispatch } from "../../store";
import { addReservation } from "./mainReservationFormSlice";
import MainReservationData from "./types/MainReservationData";



function MainReservationForm(): JSX.Element {

  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm<MainReservation>();

  const submitHandler: SubmitHandler<MainReservationData> = async (data): Promise<void> => {
    console.log(data)
    const {name, number, email, date, time, guests, comment} = data;
    const dispatchResult = await dispatch(
      addReservation({
        name,
        number,
        email,
        date,
        time,
        guests,
        comment,
        id: null
      }),
      
      )
      console.log('dispatch', dispatchResult)
      //  // проверяем если завершился успешно
      //  if (addReservation.fulfilled.match(dispatchResult)) {
      //   // если все ок, то очищаем форму
      //   setName('');
      //   setPosition('');
      // }
  };


  return (
    <form
  onSubmit={handleSubmit(submitHandler)}
      className="reservationFormer"
    >
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
          type='datetime-local'
          name="date"
        />
      </label>
      <label className="reservationFormLabel" htmlFor="time">
        Время
        <input
          {...register("time")}
          className="reservationFormInput"
          type="time"
          name="time"
        />
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
        <textarea {...register("comment")} className="reservationFormInput" name="comment" />
      </label>
      <button type="submit">Забронировать</button>
    </form>
  );
}

export default memo(MainReservationForm)
