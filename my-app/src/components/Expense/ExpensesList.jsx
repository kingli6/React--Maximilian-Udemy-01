import React from "react";
import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem.component";

// Place ExpenseItem comp in expenses.
//do the nessesary imports

// it needs the list of filteredExpenses.

const ExpensesList = (props) => {
  let expensesContent = <p className={"noExpense"}>No expenses found.</p>;

  if (props.filteredList.length > 0) {
    expensesContent = props.filteredList.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return <div>{expensesContent}</div>;
};

export default ExpensesList;
