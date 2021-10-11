import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpensesList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

function Expenses(props){

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear); 
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear; 
  });

  

    return (
      <div>
        <Card className="expenses">
          <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
          <ExpensesChart expenses={filteredExpenses} /> 
          <ExpensesList items= {filteredExpenses} /> 
        </Card>
      </div>
    );
};


export default Expenses; 