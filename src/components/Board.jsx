import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [value, setvalue] = useState(Array(9).fill(null));
  const [isXTurn, setisXTurn] = useState(true);

  const checkWinner = () => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const condition of winConditions) {
      const [a, b, c] = condition;
      if (value[a] !== null && value[a] === value[b] && value[a] === value[c]) {
        return true;
      }
    }

    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (value[index] !== null || isWinner) {
      return; // Square is already filled or a winner is declared
    }

    const newValue = [...value];
    newValue[index] = isXTurn ? "X" : "O";
    setvalue(newValue);
    setisXTurn(!isXTurn);
  };

  const PlayAgain = () => {
    setvalue(Array(9).fill(null));
  };

  return (
    <>
      {isWinner ? (
        <div className="result-message">
          {isXTurn ? "O is the winner!" : "X is the winner!"} <br />
          <button onClick={PlayAgain}>Play Again</button>
        </div>
      ) : (
        <div className="board">
          <h2>{isXTurn ? "X Turn" : "O Turn"}</h2>
          <br />
          <div className="board-container">
            <div className="row">
              <Square onClick={() => handleClick(0)} value={value[0]} />
              <Square onClick={() => handleClick(1)} value={value[1]} />
              <Square onClick={() => handleClick(2)} value={value[2]} />
            </div>
            <div className="row">
              <Square onClick={() => handleClick(3)} value={value[3]} />
              <Square onClick={() => handleClick(4)} value={value[4]} />
              <Square onClick={() => handleClick(5)} value={value[5]} />
            </div>
            <div className="row">
              <Square onClick={() => handleClick(6)} value={value[6]} />
              <Square onClick={() => handleClick(7)} value={value[7]} />
              <Square onClick={() => handleClick(8)} value={value[8]} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Board;
