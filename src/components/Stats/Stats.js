import React from 'react';
import s from './Stats.module.css';
import propTypes from 'prop-types';
// import randomColor from './randomColor';

const Stats = ({ data, title }) => {
  return (
    <section class={s.statistics}>
      {title && <h2 class="title">{title}</h2>}

      <ul class={s.statsList}>
        {data.map(el => {
          const { id, label, percentage } = el;
          return (
            <li key={id}>
              <span class="label">{label}</span>
              <span class="percentage">{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Stats.propTypes = {
  title: propTypes.string,
  data: propTypes.array.isRequired,
  el: propTypes.shape({
    id: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    percentage: propTypes.number.isRequired,
  }),
};

export default Stats;
