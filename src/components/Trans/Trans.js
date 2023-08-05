import React from 'react';
import s from './Trans.module.css';
import propTypes from 'prop-types';

const Trans = ({ data }) => {
  return (
    <table class={s.history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {data.map(action => {
          return (
            <tr key={action.id}>
              <td>{action.type}</td>
              <td>{action.amount}</td>
              <td>{action.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Trans.propTypes = {
  data: propTypes.array.isRequired,
  action: propTypes.shape({
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    amount: propTypes.number.isRequired,
    currency: propTypes.string.isRequired,
  }),
};

export default Trans;
