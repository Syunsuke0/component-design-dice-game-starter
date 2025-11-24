import { useState } from "react";
import Box from "./box";

const BoxGrid = () => {
  const [boxes, setBoxes] = useState([
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
  ]);
  const toggleBox = (idx) => {
    setBoxes((prevBoxes) => {
      return prevBoxes.map((boxIsActive, i) => {
        if (i === idx) {
          return !boxIsActive;
        } else {
          return boxIsActive;
        }
      });
    });
  };

  const reset = () => {
    setBoxes([false, false, false, false, false, false, false, false, false]);
  };
  return (
    <div className="BoxGrid">
      {boxes.map((b, idx) => (
        <Box isActive={b} toggle={() => toggleBox(idx)} key={idx} />
      ))}
      <button onClick={reset}>リセット</button>
    </div>
  );
};

export default BoxGrid;
