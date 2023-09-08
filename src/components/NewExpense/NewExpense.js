import React, { useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // create new object, witch will store data from handler parameter
    const expenseData = {
      // destructuring object (parameter) and add it to expenseData object
      ...enteredExpenseData,
      // add new property
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  // set boolean to event onClick on button - non clicked button
  const [isClicked, setIsClicked] = useState(false);

  // change state of button to use it as a conditional
  const showFormHandler = () => {
    setIsClicked(true);
  };

  const hideFormHandler = () => {
    setIsClicked(false);
  };

  let btnAddNewExpense = (
    <button onClick={showFormHandler}>Dodaj nowy wydatek</button>
  );

  let expenseForm;
  if (isClicked) {
    expenseForm = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancelClicked={hideFormHandler}
      />
    );
    btnAddNewExpense = "";
  }

  return (
    <div className="new-expense">
      {btnAddNewExpense}
      {expenseForm}
    </div>
  );
};

export default NewExpense;
