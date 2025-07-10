"use client"

import React, { useState } from 'react'

const TicTacToe = () => {
  const [board, setboard] = useState<(string | null)[]>(Array(9).fill(null));
  const [winner, setWinner] = useState<(string | null)>(null);
  const [isDraw, setIsDraw] = useState<boolean>(false);

  const [playerSymbol, setPlayerSymbol] = useState<(string | null)>(null);
  const [computerSymbol, setComputerSymbol] = useState<(string | null)>(null);
  const [gameStarted, setGameStarted] = useState(false);

  function startGame(symbol:string){
    setPlayerSymbol(symbol);
    setComputerSymbol(symbol === "X" ? "O" : "X");
    setGameStarted(true);
  }

  function renderbutton(index:number) {
    return (
      <button
        onClick={() => clickHandler(index)}
        style={{ height: 50, width: 55, margin: 2 }}
        disabled={!gameStarted || board[index] !== null || winner !== null  || isDraw}
      >
        {board[index]}
      </button>
    )
  }

  function clickHandler(index:number) {
    if (board[index] !== null || winner || isDraw || !gameStarted) return;

    const newboard = [...board];
    newboard[index] = playerSymbol;
    setboard(newboard);

    const winnerCombination = checkwinner(newboard);
    if (winnerCombination) {
      setWinner(playerSymbol);
      return;
    }

    if (newboard.every(cell => cell !== null)) {
      setIsDraw(true);
      return;
    }

    // Let computer move after small delay
    setTimeout(() => {
      makeComputerMove(newboard);
    }, 400);
  }

  function makeComputerMove(currentBoard:(string | null)[]) {
    const emptyIndices = currentBoard
      .map((val, idx) => (val === null ? idx : null))
      .filter(val => val !== null);

    if (emptyIndices.length === 0) return;

    const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    const newboard = [...currentBoard];
    newboard[randomIndex] = computerSymbol;
    setboard(newboard);

    const winnerCombination = checkwinner(newboard);
    if (winnerCombination) {
      setWinner(computerSymbol);
    } else if (newboard.every(cell => cell !== null)) {
      setIsDraw(true);
    }
  }

  function Handlereset() {
    setboard(Array(9).fill(null));
    setWinner(null);
    setIsDraw(false);
    setPlayerSymbol(null);
    setComputerSymbol(null);
    setGameStarted(false);
  }

  const checkwinner = (newboard: (string | null)[]) => {
    const combination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < combination.length; i++) {
      const [a, b, c] = combination[i];
      if (newboard[a] && newboard[a] === newboard[b] && newboard[b] === newboard[c]) {
        return combination[i];
      }
    }
    return null;
  }

  return (
    <div>
      {!gameStarted && (
        <div style={{ marginBottom: 10 }}>
          <p>Choose your symbol to start:</p>
          <button onClick={() => startGame("X")}>Play as X</button>
          <button onClick={() => startGame("O")}>Play as O</button>
        </div>
      )}

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 10 }}>
        {renderbutton(0)}
        {renderbutton(1)}
        {renderbutton(2)}
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        {renderbutton(3)}
        {renderbutton(4)}
        {renderbutton(5)}
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        {renderbutton(6)}
        {renderbutton(7)}
        {renderbutton(8)}
      </div>

      {winner && <div style={{ marginTop: 10 }}>{winner} is the winner of this game</div>}
      {isDraw && !winner && <div style={{ marginTop: 10 }}>It's a draw!</div>}

      <button onClick={Handlereset} style={{ marginTop: 10 }}>Reset</button>
    </div>
  )
}

export default TicTacToe
