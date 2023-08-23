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

    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Tytuł</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Kwota</label>
                    <input type="number" min="0.1" step="0.1" onChange={amountChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Data</label>
                    <input type="date" min="2022-01-01" max="2025-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Dodaj Wydatek</button>
            </div>

        </form>
    )
}

export default ExpenseForm