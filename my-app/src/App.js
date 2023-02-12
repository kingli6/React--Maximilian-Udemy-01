import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expense/Expenses.component";
import NewExpense from "./components/NewExpense/NewExpense";
import Testcomponent from "./components/Test.Component";

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

const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);

  //Q. Can i pass the incoming object without a useState?
  const addExpenseHandler = (incomingObject) => {
    setExpenses((expenses) => {
      return [incomingObject, ...expenses];
    });
  };
  return (
    <div>
      <Testcomponent />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expensesArray={expenses}></Expenses>
    </div>
  );
};

export default App;
/*
i can search. Search filters the monster array.
to display the array, i should do a map.()
  mapped monester.name, img can be displayed. 

i can call a function. But i need just the property. So I should return the property...
i should return the array, from that, i can display.. 

where do I run this method?
use effect?
*/
