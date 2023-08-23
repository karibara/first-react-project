import React, {useState} from "react"

import "./ExpenseForm.css"

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState("")

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
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
                    <input type="number" min="0.1" step="0.1" />
                </div>

                <div className="new-expense__control">
                    <label>Data</label>
                    <input type="date" min="2022-01-01" max="2025-12-31"/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Dodaj Wydatek</button>
            </div>

        </form>
    )
}

export default ExpenseForm