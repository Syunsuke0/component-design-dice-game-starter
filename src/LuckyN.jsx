import { useState } from "react";
import { getRolls, sum } from "./utils";
import Dice from "./Dice";
import Button from "./Button";

const LuckyN = ({ numDice = 2, goal = 7 }) => {
  const [dice, setDice] = useState(getRolls(numDice));
  const isWinner = sum(dice) === goal;
  const roll = () => setDice(getRolls(numDice));

  return (
    <main className="LuckyN">
      <h1>
        ラッキー{goal} {isWinner && "勝ち!"}
      </h1>
      <Dice dice={dice} />
      <button onClick={roll}>もう一回振る</button>
    </main>
  );
};

export default LuckyN;
