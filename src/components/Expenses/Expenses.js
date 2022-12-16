import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectYear) => {
    setFilteredYear(selectYear);
  }

  const filteredExpenses = props.items.filter((item)=>{
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {filteredExpenses.map(expense => <ExpenseItem key={expense.id} date={expense.date} title={expense.title} amount={expense.amount} />)}
      </Card>
    </div>
  )
}

export default Expenses