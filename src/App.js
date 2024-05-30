import React, { useState } from "react";
import Expenses from "./ExpenseItems/Expenses";
import NewExpense from "./NewExpense/NewExpense";

const App = () => {
  const dummyExpense = [
    {
      id: "1",
      title: "car Insurance",
      amount: 1400,
      date: new Date(2024, 4, 20),
    },
    { id: "2", title: "petrol", amount: 3400, date: new Date(2021, 4, 29) },
    { id: "3", title: "groceries", amount: 8000, date: new Date(2022, 4, 30) },
    {
      id: "4",
      title: "weekend party",
      amount: 2200,
      date: new Date(2024, 5, 20),
    },
  ];

  const [newwEnteredData, setNewEnteredData] = useState(dummyExpense);

  const newSaveEnteredData = (newData) => {
    setNewEnteredData([newData, ...dummyExpense]);
  };
  console.log(newwEnteredData);

  const onDeleteHandler = (id) => {
    // console.log("========== e, e", e);
    const deletedId = id; //container id mila onclick krne se
    const filteredData = newwEnteredData.filter((x) => x.id !== deletedId);
    // setNewEnteredData(newEnteredData => {
    //   let deleteData = newEnteredData.filter(remain => { remain.id !== deletedItem.id})
    //   return deleteData;
    // })
    setNewEnteredData(filteredData);
  };

  return (
    <div>
      <NewExpense newEnteredData={newSaveEnteredData} />
      <Expenses item={newwEnteredData} onDeleteHandler={onDeleteHandler} />
    </div>
  );
};

export default App;
