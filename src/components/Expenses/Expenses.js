import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");

  const pickedExpensesDate = (pickedDate) => {
    setFilteredYear(pickedDate);
    console.log("data in Expenses.js");
  };

  // const filteredByYearExpenses = props.items.filter((selectedYear) => {
  //   return selectedYear.date === pickedExpensesDate;
  // });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onPickedExpensesDate={pickedExpensesDate}
        />

        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
