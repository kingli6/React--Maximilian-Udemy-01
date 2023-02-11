// import React, { useState } from "react";
import React, { useState } from "react";
import "./Expenses.component.css";
import ExpenseItem from "./ExpenseItem.component";
import ExpensesFilter from "../NewExpense/ExpensesFilter";

const dummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
//i need to send the new data from the form through props
function Expenses(props) {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [expensesArray, setExpensesArray] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpensesArray((prevExpense) => {
      return [props.newExpense, ...prevExpense];
    });
  };

  const yearFilterHandler = (event) => {
    setSelectedFilter(event);
    //this needs a filter function.
  };
  return (
    <div className="expenses">
      <ExpensesFilter
        selectedYear={selectedFilter}
        onChangeFilter={yearFilterHandler}
      />
      {expensesArray.map((expense) => (
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
