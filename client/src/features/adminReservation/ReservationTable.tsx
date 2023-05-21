/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { memo, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { initTimeTable } from './reservaionSlice';
import styles from './styles.module.css';

function ReservationTable(): JSX.Element {
  const [style, setStyle] = useState(false);
  const dispatch = useAppDispatch();
  const timeList = useSelector(
    (state: RootState) => state.adminReservation.timeList
  );
  const tablesList = useSelector(
    (state: RootState) => state.adminReservation.tablesList
  );
  const reservationList = useSelector(
    (state: RootState) => state.adminReservation.reservationList
  );
  console.log('время', timeList);
  console.log('столы', tablesList);
  console.log('резервы', reservationList);

  useEffect(() => {
    dispatch(initTimeTable());
  }, [dispatch]);

  const handleClick = (event: React.MouseEvent<HTMLTableCellElement>): void => {
    const target = event.target as HTMLTableCellElement;
    const { id } = target.dataset;
    const parrent = target.closest('.parrent');
    /* eslint-disable  */
    const id1 = parrent.dataset.id;
    console.log('время', id1, 'стол', id);
    reservationList.map((reserv) => {
      if (
        Number(reserv.time_id) === Number(id1) &&
        Number(reserv.table_id) === Number(id)
      ) {
        setStyle(true);
      }
    });
  };
  console.log({ style });

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Время</th>
          {tablesList.map((table) => (
            <th data-id={table.id}>Стол {table.number}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {timeList.map((time) => (
          // столбец со временем
          <tr data-id={time.id} className="parrent">
            <td>{time.time}</td>
            {tablesList.map((table) => (
              <>
                {reservationList.map((reserv) => (
                  // строка с номером ячейки
                  <>
                    {style ? (
                      <td
                        key={table.id}
                        onClick={(event) => handleClick(event)}
                        data-id={table.id}
                        className={styles.colorA}
                      >
                        {table.id}
                      </td>
                    ) : (
                      <td
                        key={table.id}
                        onClick={(event) => handleClick(event)}
                        data-id={table.id}
                        className={styles.colorB}
                      >
                        {table.id}
                      </td>
                    )}
                  </>
                ))}
              </>
            ))}
            <button type="submit">Закрыть время</button>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default memo(ReservationTable);
