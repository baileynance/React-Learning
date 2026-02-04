export default function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className={`w-24 h-24 m-1 bg-white border rounded-lg border-gray-400
        transition-all duration-300 ease-out
        hover:bg-gray-200 hover:shadow-lg
        active:scale-95
        ${value ? "text-4xl" : "scale-100"}
      `}
    >
      {value}
    </button>
  );
}