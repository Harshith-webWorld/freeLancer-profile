import { useState, useEffect } from "react";

export default function PokerGame() {
  const [state, setState] = useState({
    number1: 0,
    number2: 0,
    number3: 0
  });
  const [start, setStart] = useState(false);
  const [noOfGames, setNoOfGames] = useState(0);
  const [totalWins, setTotalWins] = useState(0);
  const [totalFails, setTotalFails] = useState(0);

  useEffect(() => {
    let random = 0;
    if (start) {
      random = setInterval(() => {
        setState({
          number1: Math.floor(Math.random() * 10),
          number2: Math.floor(Math.random() * 10),
          number3: Math.floor(Math.random() * 10)
        });
      }, 1000);
    } else {
      random = clearInterval();
      setState({
        number1: state.number1,
        number2: state.number2,
        number3: state.number3
      });
    }
    return () => clearInterval(random);
  }, [start]);

  const handleStart = () => {
    setStart(true);
  };

  const handleStop = () => {
    setStart(false);
    if (
      state.number1 === state.number2 &&
      state.number2 === state.number3 &&
      state.number1 === state.number3
    ) {
      alert("Win the game");
      setTotalWins((prev) => prev + 1);
    } else {
      setTotalFails((prev) => prev + 1);
      alert("lost the game");
    }
    setNoOfGames((prev) => prev + 1);
    handleReset();
  };

  const handleReset = () => {
    setState({
      number1: 0,
      number2: 0,
      number3: 0
    });
  };

  return (
    <div className="App">
      {`${state.number1} ${state.number2} ${state.number3}`}
      <br />
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <br /> {`Total no of games played : ${noOfGames}`}
      <br /> {`Win : ${totalWins} Fail :  ${totalFails}`}
    </div>
  );
}
