// import React, { useState } from "react";
import React, { useState } from "react";
import "./Expenses.component.css";
import ExpenseItem from "./ExpenseItem.component";
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

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <div className="expenses">
      <ExpensesFilter
        selectedYear={selectedFilter}
        onChangeFilter={yearFilterChangeHandler}
      />
      {expensesContent}
    </div>
  );
}
export default Expenses;
