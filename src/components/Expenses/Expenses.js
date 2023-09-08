import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  // filter logic
  const [filteredYear, setFilteredYear] = useState("2023");

  const pickedExpensesDateHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onPickedExpensesDate={pickedExpensesDateHandler}
        />

        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
