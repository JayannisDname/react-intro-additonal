import React, { useEffect } from "react";

const Counter = ({ counter, children, onDelete, onIncrement, onDecrement }) => {
  useEffect(() => {
    return () => {
      console.log("component unmounting........");
    };
  }, []);

  const getClassName = () => {
    if (counter.value > 0) {
      return "badge bg-primary";
    }
    return "badge bg-warning text-dark";
  };

  const formatText = () => {
    if (counter.value > 0) {
      return counter.value;
    }
    return "Zero";
  };

  return (
    <>
      <div className="m-4">
        {/* <img src={this.state.image}></img>
        <a href={this.state.image}>{this.getName()}</a> */}
        {children}

        <span className={getClassName()}>{formatText()}</span>

        <button
          onClick={() => onIncrement(counter.id)}
          className="btn btn-primary ms-4"
        >
          +
        </button>
        <button
          onClick={() => onDecrement(counter.id)}
          className="btn btn-secondary ms-1"
          disabled={counter.value === 0}
        >
          -
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger ms-1"
        >
          x
        </button>
      </div>
      {/* {this.state.tags.map((tag) => (
          <h1 key={tag}>{tag}</h1>
        ))} */}
    </>
  );
};

export default Counter;
