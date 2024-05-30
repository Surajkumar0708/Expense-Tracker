import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const[isEditing, setIsetditing] = useState(false);

    const saveEnteredData = (enteredData) => {
        const enteredExpenseData = {
            ...enteredData,
            id: Math.random().toString()
        }
        props.newEnteredData(enteredExpenseData);
        setIsetditing(false);

        console.log(enteredExpenseData.id)
        
    }

    const isEditingHandler = () => {
        setIsetditing(true);
    }

    const isCancelHandler = () => {
        setIsetditing(false);
    }

    return(
        <div className="new-expense">
            {!isEditing && <button type = "button" onClick={isEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveEnteredData = {saveEnteredData} onCancel = {isCancelHandler}/>}
        </div>
    )

}

export default NewExpense;