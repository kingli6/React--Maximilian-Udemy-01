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
  return (
    <div className="expenses">
      <ExpensesFilter
        selectedYear={selectedFilter}
        onChangeFilter={yearFilterChangeHandler}
      />
      {filteredExpenses.length === 0 && (
        <p>No expenses for year {selectedFilter}</p>
      )}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </div>
  );
}
export default Expenses;
