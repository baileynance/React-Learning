export default function Square({ value, onSquareClick }) {

  return <button onClick={onSquareClick} className="w-20 h-20 m-1 bg-white border rounded-lg border-gray-400 hover:bg-gray-200">{value}</button>;

}