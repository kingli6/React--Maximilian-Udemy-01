// import React, { useState } from "react";
import React, { useState } from "react";
import "./Expenses.component.css";
import ExpenseItem from "./ExpenseItem.component";
import ExpensesFilter from "../NewExpense/ExpensesFilter";

//i need to send the new data from the form through props
function Expenses(props) {
  const [selectedFilter, setSelectedFilter] = useState("");
  // const []
  // a. ExpensesFilter is in the wrong folder and maybe needs rewiring.
  //B. I need to use the function below in NewExpense. But we are in the other side.
  //the data that is coming through form needs to be placed in Expenses or newExpense component.

  // I have the new expense item, but I don't know how to initiate this function that adds the
  // incoming data to the existing.

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
      {filteredExpenses.length === 0 ? (
        <p>No expenses for year {selectedFilter}</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </div>
  );
}
export default Expenses;