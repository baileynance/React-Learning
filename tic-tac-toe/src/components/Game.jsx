import Board from './Board.jsx';
import { useState } from 'react';

export default function Game() {

    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];

    function handlePlay(nextSquares) {
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }

    return (
      <div>
        <div>
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div>
          <ol>{/*TODO*/}</ol>
        </div>
      </div>
    );
}