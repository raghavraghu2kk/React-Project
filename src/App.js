import React , {userState} from 'react';
import { useState } from 'react/cjs/react.development';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMY_Expenses = [
  { id: 1 ,title: 'Pepsi' , amount: '100' , date: new Date(2022,0,31)},
  { id: 2 ,title: 'MacDonalds' , amount: '129' , date: new Date(2022,0,30)},
  { id: 3 ,title: 'Dominoz Loaded Pizza' , amount: '150' , date: new Date(2022,0,29)},
  { id: 4 ,title: 'Fried Rice' , amount: '70' , date: new Date(2022,0,31)},
];



function App() {
  
  const [expenses, setExpenses] = useState(DUMY_Expenses);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2>MY EXPENSES</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}  />
    </div>
  );
}

export default App;
