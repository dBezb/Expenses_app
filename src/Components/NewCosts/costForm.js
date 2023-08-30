import { useState } from "react";
import "./costForm.css";
const CostForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  const nameChangeHandle = (event) => {
    setInputName(event.target.value);
  };
  const amountChangeHandle = (event) => {
    setInputAmount(event.target.value);
  };
  const dateChangeHandle = (event) => {
    setInputDate(event.target.value);
  };

  const sumbitHandle = (event) => {
    event.preventDefault();

    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };
    props.onSaveCostData(costData);
    setInputName("");
    setInputAmount("");
    setInputDate("");
  };
  return (
    <form onSubmit={sumbitHandle}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Title</label>
          <input type="text" onChange={nameChangeHandle} value={inputName} />
        </div>
        <div className="new-cost__control">
          <label>Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandle}
            value={inputAmount}
          />
        </div>
        <div className="new-cost__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            step="2023-08-05"
            onChange={dateChangeHandle}
            value={inputDate}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add an expense</button>
          <button type="button" onClick={props.onCostCancel}>
            Abolition
          </button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
