import { useState } from "react";
import "./costForm.css";
const CostForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");
  //   const [userInput, setuserInput] = useState({
  //     name: "",
  //     amount: "",
  //     date: "",
  //   });

  const nameChangeHandle = (event) => {
    setInputName(event.target.value);
  };
  const amountChangeHandle = (event) => {
    setInputAmount(event.target.value);
    // setuserInput({
    //   ...userInput,
    //   amount: event.target.value,
    // });
    // setuserInput((previousState)=>{ -------> завжди юзати коли залежить від старого стану,
    //     return {
    //         ...previousState,
    //         amount: event.target.value,
    //     }

    // })
  };
  const dateChangeHandle = (event) => {
    setInputDate(event.target.value);
    // setuserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });
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
          <label>Назва</label>
          <input type="text" onChange={nameChangeHandle} value={inputName} />
        </div>
        <div className="new-cost__control">
          <label>Ціна</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandle}
            value={inputAmount}
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="date"
            min="2020-01-01"
            step="2023-08-05"
            onChange={dateChangeHandle}
            value={inputDate}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Додати витрату</button>
          <button type="button" onClick={props.onCostCancel}>
            Відміна
          </button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;