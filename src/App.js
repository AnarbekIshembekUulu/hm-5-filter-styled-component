import "./App.css";
import NewExpense from "./components/new-expense/NewExpense";
import Expenses from "./components/expenses/Expenses";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([
    {
      title: "Туалетная бумага",
      price: 300,
      date: new Date(),
    },
    {
      title: " zaryadnik",
      price: 400,
      date: new Date(),
    },
  ]);

  const addNewExpensehandler = (data) => {
    const ubdatedExpenses = [...expenses];
    ubdatedExpenses.push(data);
    setExpenses(ubdatedExpenses);
  };
  return (
    <div className="App">
      <NewExpense onNewExpenseadd={addNewExpensehandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
