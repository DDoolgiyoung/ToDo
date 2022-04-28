import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredtTitle, setEneteredTitle] = useState('');
    const [enteredAmount, setEneteredAmount] = useState('');
    const [enteredtDate, setEneteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) => {
        //기본적인 useState 관리
        setEneteredTitle(event.target.value);

        //추가적으로 쉽게 useState 관리
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value }
        // }) //항상 최신상태로 업데이트하는 안전한 방법
    };

    const amountChangeHandler = (event) => {
        setEneteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    }

    const dateChangeHandler = (event) => {
        setEneteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredtTitle,
            amount: enteredAmount,
            date: new Date(enteredtDate)
        }

        props.onSaveExpenseData(expenseData);
        setEneteredTitle('');
        setEneteredAmount('');
        setEneteredDate('');

        console.log(expenseData);
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
         <div className="new-expense__control">
            <label>제목</label>
            <input type='text' value={enteredtTitle} onChange={titleChangeHandler}/>
         </div>
         <div className="new-expense__control">
            <label>가격</label>
            <input 
            type='number' 
            min="0.01" 
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler} />
         </div>
         <div className="new-expense__control">
            <label>날짜</label>
            <input 
            type='date' 
            min="2022-01-01" 
            max="2024-12-31"
            value={enteredtDate}
            onChange={dateChangeHandler}
            />
         </div>
        </div>
        <div className="new-expense__actions">
            <button type='submit'>추가하기</button>
        </div>
    </form>
}

export default ExpenseForm;