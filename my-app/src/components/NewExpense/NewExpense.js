import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredData) => {
    //step2.a     revieving the data through the method
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData); //step2.c sending it to the parent
    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      {/* Step2.b    recieving the data*/}
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
