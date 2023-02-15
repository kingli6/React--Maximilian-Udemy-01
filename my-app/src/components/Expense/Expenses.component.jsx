// import React, { useState } from "react";
import React, { useState } from "react";
import "./Expenses.component.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../NewExpense/ExpensesFilter";

function Expenses(props) {
  const [selectedFilter, setSelectedFilter] = useState("");

  const yearFilterChangeHandler = (event) => {
    setSelectedFilter(event);
  };

  //WHen does this run?
  const filteredExpenses = props.expensesArray.filter((item) => {
    return item.date.getFullYear().toString() === selectedFilter;
  });
  //NICE ONE! [] work on other debugging tool
  // console.log(
  //   props.expensesArray.map((item) => item.date.getFullYear().toString())
  // );

  // Place ExpenseItem comp in expenses.
  //do the nessesary imports

  // it needs the list of filteredExpenses.

  return (
    <div className="expenses">
      <ExpensesFilter
        selectedYear={selectedFilter}
        onChangeFilter={yearFilterChangeHandler}
      />
      <ExpensesList filteredList={filteredExpenses} />
      {/* {expensesContent} */}
    </div>
  );
}
export default Expenses;
