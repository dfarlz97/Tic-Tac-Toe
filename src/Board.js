import { useState } from "react";
import Square from "./Square.js"
import calculateWinner from "./Winner.js";

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(squares);

    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next Player: " + (xIsNext ? "X" : "O");
    }
    function handleClick(i) {
        const nextSquares = squares.slice();
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        if (xIsNext) {
            nextSquares[i] = 'X'
        } else {
            nextSquares[i] = 'O'
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }
  return (
  <>
  <div className="game-board">
    <div className="status">{status}</div>
        <div className ='board-row'>
            <Square value ={squares[0]} onSquareClick= {() => handleClick(0)} />
            <Square value ={squares[1]} onSquareClick= {() => handleClick(1)} />
            <Square value ={squares[2]} onSquareClick= {() => handleClick(2)} />
        </div>
        <div className ='board-row'>
            <Square value ={squares[3]} onSquareClick= {() => handleClick(3)} />
            <Square value ={squares[4]} onSquareClick= {() => handleClick(4)} />
            <Square value ={squares[5]} onSquareClick= {() => handleClick(5)} />
        </div>
        <div className ='board-row'>
            <Square value ={squares[6]} onSquareClick= {() => handleClick(6)} />
            <Square value ={squares[7]} onSquareClick= {() => handleClick(7)} />
            <Square value ={squares[8]} onSquareClick= {() => handleClick(8)} />
        </div>
   </div>
  </>
);
}