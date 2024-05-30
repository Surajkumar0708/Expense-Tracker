import React, { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2024");

  const onChangefilterYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // const [deleteData, setDeleteData] = useState(filteredExpenses);

  // let expenseContent = (<p style = {{color:'white'}}>No expenses found.</p>);
  // if(filteredExpenses.length > 0) {
  //   expenseContent = filteredExpenses.map(expense => (
  //   <ExpenseItems
  //     key = {expense.id}
  //     title = {expense.title}
  //     amount = {expense.amount}
  //     date = {expense.date}
  //   />
  // ))}

  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={onChangefilterYear}
      />

      {/* {expenseContent} */}

      {filteredExpenses.length === 0 ? (
        <p style={{ color: "white" }}>No expense found.</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItems
            onDeleteHandler={props.onDeleteHandler}
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}

      {/* <ExpenseItems 
      title = {props.item[0].title} 
      amount = {props.item[0].amount}
      date = {props.item[0].date}
      ></ExpenseItems>
      <ExpenseItems
      title = {props.item[1].title} 
      amount = {props.item[1].amount}
      date = {props.item[1].date}
      ></ExpenseItems>
      <ExpenseItems
      title = {props.item[2].title} 
      amount = {props.item[2].amount}
      date = {props.item[2].date}
      ></ExpenseItems>
      <ExpenseItems
      title = {props.item[3].title} 
      amount = {props.item[3].amount}
      date = {props.item[3].date}
      ></ExpenseItems> */}
    </div>
  );
};

export default Expenses;
