import "./costList.css";
import CostItem from "./costItem";

const CostList = (props) => {
  let costContent = <p className="cost-list__fallback">There are no costs</p>;

  if (props.costsFilter.length > 0) {
    costContent = props.costsFilter.map((cost) => (
      <CostItem
        key={cost.id}
        date={cost.date}
        description={cost.description}
        amount={cost.amount}
      />
    ));
  }
  return <ul className="cost-list">{costContent}</ul>;
};

export default CostList;
