import React from "react";
import "./ExpenseItems.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

const ExpenseItems = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">&#8377;{props.amount}</div>
      </div>
      <div>
        <button
          className="delete"
          onClick={() => props.onDeleteHandler(props.id)}
          id={props.id}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ExpenseItems;
