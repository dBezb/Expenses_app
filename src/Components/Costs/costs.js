import { useState } from "react";
import "./costs.css";
import Card from "../UI/card";
import CostFilter from "./costFilter";
import CostList from "./costList";
import CostDiagram from "./costDiagram";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const yearChangeHandle = (year) => {
    setSelectedYear(year);
    console.log(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="costs">
        <CostFilter year={selectedYear} onChangeYear={yearChangeHandle} />
        <CostDiagram costs={filteredCosts} />
        <CostList costsFilter={filteredCosts} />
      </Card>
    </div>
  );
};

export default Costs;
