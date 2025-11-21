import Die from "./Die";
import "./Dice.css";

const Dice = ({ dice }) => {
  return (
    <section className="Dice">
      {dice.map((v, i) => (
        <Die key={i} val={v} />
      ))}
    </section>
  );
};

export default Dice;
