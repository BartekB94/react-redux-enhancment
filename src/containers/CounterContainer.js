import React, { useState } from "react";

import Counter from "../components/Counter";
import useOpacity from "../hooks/useOpacity";

const CounterContainer = () => {
  const [clicksNumber, setClicksNumber] = useState(0);
  const opacity = useOpacity(0.1, 0.1);

  const increment = () => {
    setClicksNumber(clicksNumber + 1);
  };
  return (
    <div style={{ opacity: opacity }}>
      <Counter onIncrement={increment} clicksNumber={clicksNumber} />
    </div>
  );
};

export default CounterContainer;
