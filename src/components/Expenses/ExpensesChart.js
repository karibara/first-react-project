import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "ST", value: 0 },
    { label: "LUT", value: 0 },
    { label: "MRZ", value: 0 },
    { label: "KW", value: 0 },
    { label: "MAJ", value: 0 },
    { label: "CZ", value: 0 },
    { label: "LIP", value: 0 },
    { label: "SIER", value: 0 },
    { label: "WRZ", value: 0 },
    { label: "PAŹ", value: 0 },
    { label: "LIS", value: 0 },
    { label: "GR", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); //starting at 0 => ST => 0
    chartDataPoints[expenseMonth].value = +expense.amount; // expenseMonth use as an index to for loop. Value will be summed up for the given month expenses.
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
