import React, { useState } from 'react';
import './ExpenseForm.css'; 

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
            setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
       setEnteredDate(event.target.value); 
    };

//     // The alternative way of doing this is to have all three in one useState

//      const [userInput, setUserInput] = useState({
//         // the intial values are here
//         enteredTitle: "",
//         entereAmount: "",
//         enteredDate : "",
//     });
//    // NB: this approach updates only the one which has been changed but it does not take with it the other which are not 
//    // changed. so you need to make sure to copy the old value by using the spread operator ...userInput 
//    // in this case. 
//     const titleChangeHandler = (event) => {
//          setUserInput({
//              ...userInput,
//              enteredTitle: event.target.value,
    // another better way to do this. If you depend on previous value for updating sth you need to have the 
    // useState({
    //     //         enteredTitle: "",
    //     //         entereAmount: "",
    //     //         enteredDate : "",
    //       }); as a prevState and you get it from excutaion of a function and you copy it as a spread operator and 
    //       override the the one you want to update. 
    // setUserInput((prevState) => {
    //  return {...prevState, enteredTitle: event.target.value};
    // });

//          });
//     };
//     const amountChangeHandler = (event) => {
//         setUserInput({
//             ...userInput,
//             enteredAmount: event.target.value,

//         });
//    };

//     const dateChangeHandler = (event) => {
//         setUserInput({
//             ...userInput,
//             enteredDate: event.target.value,

//         });
//    };

const submitHandler= (event) => {
   event.preventDefault();
   
   const expenseData = {
       title : enteredTitle,
       amount: enteredAmount,
       date: new Date(enteredDate)
   };
   // this sendes data from the child( NewExpenseForm ) to a parent (NewExpense)
   props.onSaveExpenseData(expenseData);

   setEnteredTitle("");
   setEnteredAmount("");
   setEnteredDate("");
};

   return (
    <form onSubmit = {submitHandler}>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label> 
            <input type="text" value ={enteredTitle} onChange={ titleChangeHandler}/> 
        </div>
        <div className="new-expense__control">
            <label>Amout</label>
            <input type="number" min="0.01" step="0.01" value = {enteredAmount} onChange={amountChangeHandler}/> 
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" value ={enteredDate} onChange = {dateChangeHandler}/> 
        </div>

    </div>
    <div className="new-expense__actions">
        <button type="submit">Add Expense</button>

    </div>
</form>

   );
  
};

export default ExpenseForm; 