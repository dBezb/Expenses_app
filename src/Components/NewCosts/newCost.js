import { useState } from "react";
import CostForm from "./costForm";
import "./newCost.css";
const NewCost = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveCostDataHandle = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };

    props.onAddCost(costData);

    setIsFormVisible(false);
  };

  const inputCostDataHandle = () => {
    setIsFormVisible(true);
  };

  const cancelCostHandle = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={inputCostDataHandle}>Додати нову витрату</button>
      )}
      {isFormVisible && (
        <CostForm
          onSaveCostData={saveCostDataHandle}
          onCostCancel={cancelCostHandle}
        />
      )}
    </div>
  );
};

export default NewCost;
