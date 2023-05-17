import React, { useState } from "react";
import Costs from "./Components/Costs/costs";
import NewCost from "./Components/NewCosts/newCost";
import { INITIAL_COSTS } from "./constants";

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      console.log(cost);
      return [cost, ...prevCosts];
    });
  };
  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
