import "./App.css";
import Expenses from "./components/Expense/Expenses.component";
import NewExpense from "./components/NewExpense/NewExpense";
import Testcomponent from "./components/Test.Component";

const App = () => {
  let datafromForm = [];

  const addExpenseHandler = (incomingObject) => {
    datafromForm[0] = incomingObject;
    console.log("in app js");
    console.log(incomingObject);
  };
  return (
    <div>
      <Testcomponent />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses></Expenses>
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
