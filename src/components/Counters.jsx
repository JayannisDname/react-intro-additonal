import React from "react";
import Counter from "./Counter";

const Counters = ({
  onIncrement,
  onDecrement,
  onDelete,
  counters,
  onReset,
}) => {
  return (
    <div>
      <button onClick={onReset} className="btn btn-primary ms-4 mt-3">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          onDelete={onDelete}
          counter={counter}
          key={counter.id}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        >
          <h6>counter{counter.value}</h6>
        </Counter>
      ))}
    </div>
  );
};

export default Counters;
