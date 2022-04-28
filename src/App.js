import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components//Expenses/ExpenseItem.js';
import Expenses from './components/Expenses/Expenses.js';
import NewExpense from './components/NewExpenses/NewExpense.js';
import { useState } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: '화장지',
    amount: 1000,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
    title: 'TV', 
    amount: 1200000, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: '차 보험',
    amount: 378000,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: '나무 책상',
    amount: 45000,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;