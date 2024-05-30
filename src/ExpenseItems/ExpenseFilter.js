import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  // const [enteredDropdownValue, setEnteredDropdownValue] = useState('2021');
  const onChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expense-filter">
      <div className="expense-filter__content">
        <label>Filter By Year</label>
        <select onChange={onChangeHandler}>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
