import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [defaulAddExpLayout, setDefaultAddExpLayout] = useState(true);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); //preventing the inbuilt submit function. (I've noticed that it reloads the page when clicked.)
    //Step 1.a      //getting the data
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData); //step1.b       sending the data THROUGH a method that is created in the parent component
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setDefaultAddExpLayout(true);
  };

  const openAddNewExpenseHandler = () => {
    setDefaultAddExpLayout(false);
  };
  const closenAddNewExpenseHandler = () => {
    setDefaultAddExpLayout(true);
  };
  if (defaulAddExpLayout === true) {
    return (
      <div className="new-expense__controls">
        <div className="new-expense__actions">
          <button onClick={openAddNewExpenseHandler}>New Expense</button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <>
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              onChange={amountChangeHandler}
              min="0.01"
              step="0.01"
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              onChange={dateChangeHandler}
              min="2022-01-01"
              max="2023-12-31"
            />
          </div>
        </>
        <div className="new-expense__actions">
          <button onClick={closenAddNewExpenseHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;

/* EXERCISE for useState
import React, {useState} from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    
    const [validOrInvalid, setValidOrInvalid] = React.useState('Invalid');
    //const [enteredText, setEnteredText] = React.useState('');
    
    const textChangeHandler = (event) =>{
        const value = event.target.value;
        //setEnteredText(event.target.value.trim());
        
        if (value.length < 3)
            setValidOrInvalid('Invalid');
        else{
            setValidOrInvalid('Valid')
        }
    };
    
    return (
        <form>
            <label>Your message</label>
            <input type="text" onChange={textChangeHandler}/>
            <p>{validOrInvalid} message</p>
        </form>
    );
}
*/
