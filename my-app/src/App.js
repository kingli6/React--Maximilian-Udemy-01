import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expense/Expenses.component";
import NewExpense from "./components/NewExpense/NewExpense";
import Testcomponent from "./components/Test.Component";

const App = () => {
  const [passingObj, setPassingObj] = useState("");

  //Q. Can i pass the incoming object without a useState?
  const addExpenseHandler = (incomingObject) => {
    setPassingObj(incomingObject); //Q. I'm not creating a return function cause I'm not connecting any array
  };
  return (
    <div>
      <Testcomponent />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses newExpense={passingObj}></Expenses>
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
