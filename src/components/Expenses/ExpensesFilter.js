import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {


  const changeExpensesDateHandler = (event) => {
    let pickedDate = (event.target.value);
    props.onPickedExpensesDate(pickedDate)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filtruj</label>
        <select value={props.selected} onChange={changeExpensesDateHandler}>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;