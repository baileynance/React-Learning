import Square from "./Square.jsx";
import { useState } from 'react';

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(1));
  
  return (
    <>
      <div className="grid place-items-center min-h-screen">
        <div className="grid grid-cols-3 gap-y-0">
          <Square value={squares[0]}/>
          <Square value={squares[1]}/>
          <Square value={squares[2]}/>
          <Square value={squares[4]}/>
          <Square value={squares[5]}/>
          <Square value={squares[3]}/>
          <Square value={squares[6]}/>
          <Square value={squares[7]}/>
          <Square value={squares[8]}/>
        </div>
      </div>
    </>
  )
}