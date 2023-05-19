import React from 'react';
import Table from 'react-bootstrap/Table';
import styles from './styles.module.css';

function ReservationTable(): JSX.Element {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Время</th>
          {Array.from({ length: 19 }).map((_, index) => (
            <th data-id={index}>Стол {index + 1}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 19 }).map((_, index) => (
          <tr>
            <td>Время</td>
            {Array.from({ length: 19 }).map((_1, index1) => (
              <td data-id={index}>
                <button
                  type="button"
                  onClick={() => console.log('click', index1 + 1, index + 1)}
                >
                  {index1 + 1}
                </button>
              </td>
            ))}
            <button type="submit">Закрытое время</button>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ReservationTable;
