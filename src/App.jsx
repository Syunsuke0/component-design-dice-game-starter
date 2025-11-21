import LuckyN from "./LuckyN";

const App = () => {
  return (
    <div>
      <LuckyN />
      <LuckyN numDice={3} goal={14} />
    </div>
  );
};

export default App;
