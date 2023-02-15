import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const yearDropDownHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  //problem, rendering issue with 2023, the default value not working right away...

  // T. need to have a no-value in the filter or ALL option to pick everything.
  //q. should i have the parent function inside yearDropDownHandler? A. Yes

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selectedFilter} onChange={yearDropDownHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
