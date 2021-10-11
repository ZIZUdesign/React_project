import React, { useState } from 'react'; 

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';


function ExpenseItem(props) {
  // a react hook must not be nested inside a method or neither stated outstide the react function 
  // it always should be nested inside the react function
  //the first value is the curent value and the second is a function for updating the current value.  
  

    return (
        // NB: You can not use a custom component as a wrapper
    <li>
        <Card className="expense-item">
            <ExpenseDate date ={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    </li>
);

}

export default ExpenseItem;