import React, { useState } from 'react'; 

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';


function ExpenseItem(props) {
  // a react hook must not be nested inside a method or neither stated outstide the react function 
  // it always should be nested inside the react function
  //the first value is the curent value and the second is a function for updating the current value.  
  const [title,setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React');
  
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };
    return (
        // NB: You can not use a custom component as a wrapper
        <Card className="expense-item">
            <ExpenseDate date ={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title </button>
        </Card>
    );

}

export default ExpenseItem;