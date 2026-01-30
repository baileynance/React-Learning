import Square from "./Square.jsx";
import { useState } from 'react';

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(1));
  
  return (
    <>
      <button className="bg-red-500 text-white p-4">
      TEST
      </button>
      
      <div className="board-row">
        <Square value={squares[0]}/>
        <Square value={squares[1]}/>
        <Square value={squares[2]}/>
      </div>
      <div className="board-row">
        <Square value={squares[4]}/>
        <Square value={squares[5]}/>
        <Square value={squares[3]}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]}/>
        <Square value={squares[7]}/>
        <Square value={squares[8]}/>
      </div>
    </>
  )
}