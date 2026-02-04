export default function Square({ value, onSquareClick }) {

  return <button onClick={onSquareClick} className="w-24 h-24 m-1 bg-white border rounded-lg border-gray-400 hover:bg-gray-200 hover:shadow-lg">{value}</button>;

}