import React, {useState} from "react"

import "./ExpenseForm.css"

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState("")
    const [enteredAmount, setEnteredAmount] = useState("")
    const [enteredDate, setEnteredDate] = useState("")

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        // disable default browser behavior, in this case reload page after clik on button submit
        event.preventDefault();

        // create an object to sotre handled data from form
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        console.log(expenseData);

        // clean form inputs using two-way binding by adding the value to the input
        setEnteredTitle("")
        setEnteredAmount("")
        setEnteredDate("")
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Tytuł</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Kwota</label>
                    <input type="number" min="0.1" step="0.1" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Data</label>
                    <input type="date" min="2022-01-01" max="2025-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Dodaj Wydatek</button>
            </div>

        </form>
    )
}

export default ExpenseForm