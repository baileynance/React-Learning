import Square from "./Square.js";

export default function Board() {
  
  return (
    <>
      <div className="board-row">
        <Square value={"X"} />
        <Square value={"X"} />
        <Square value={"X"} />
      </div>
      <div className="board-row">
        <Square value={"X"} />
        <Square value={"X"} />
        <Square value={"X"} />
      </div>
      <div className="board-row">
        <Square value={"X"} />
        <Square value={"X"} />
        <Square value={"X"} />
      </div>
    </>
  )
}