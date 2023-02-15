import React from "react";
import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem.component";

// Place ExpenseItem comp in expenses.
//do the nessesary imports

// it needs the list of filteredExpenses.

const ExpensesList = (props) => {
  if (props.filteredList.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul>
      {props.filteredList.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      ;
    </ul>
  );
};

export default ExpensesList;
