import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { initTimeTable } from './reservaionSlice';
import styles from './styles.module.css';

function ReservationTable(): JSX.Element {
  const dispatch = useAppDispatch();
  const timeList = useSelector((state: RootState) => state.timeTables.timeList);
  const tablesList = useSelector(
    (state: RootState) => state.timeTables.tablesList
  );
  console.log('время', timeList);
  console.log('столы', tablesList);

  useEffect(() => {
    dispatch(initTimeTable());
  }, [dispatch]);

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
        {timeList.map((el) => (
          <tr>
            <td data-id={el.id}>{el.time}</td>
            {Array.from({ length: 19 }).map((_1, index1) => (
              <td>-</td>
            ))}
            <button className='button' type="submit">Закрытое время</button>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ReservationTable;
