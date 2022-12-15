import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectYear) => {
    console.log(selectYear);
    setFilteredYear(selectYear);
  }
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpenseItem date={props.items[0].date} title={props.items[0].title} amount={props.items[0].amount} />
        <ExpenseItem date={props.items[1].date} title={props.items[1].title} amount={props.items[1].amount} />
        <ExpenseItem date={props.items[2].date} title={props.items[2].title} amount={props.items[2].amount} />
        <ExpenseItem date={props.items[3].date} title={props.items[3].title} amount={props.items[3].amount} />
      </Card>
    </div>
  )
}

export default Expenses