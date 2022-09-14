import { FC } from "react";
import { Board } from "../Models/Board";
import { Cell } from "../Models/Cell";
import { FigureComponent } from "./FigureComponent";

interface CellProps {
  cell: Cell;
  board: Board;
  setActivePiece: (cell: Cell) => void;
}

export const CellComponent: FC<CellProps> = ({
  cell,
  board,
  setActivePiece,
}) => {
  return (
    <>
      {cell.coordinates.file === "a" && (
        <div
          id={"cell-rank" + cell.coordinates.rank}
          style={{
            position: "absolute",
            top: `calc(${cell.coordinates.rank} * var(--cell-size) + 1.3rem)`,
            left: `calc(50% - (4.3 * var(--cell-size)))`,
            zIndex: 101,
          }}
        >
          <span>{cell.coordinates.rank?.toString()}</span>
        </div>
      )}
      {cell.coordinates.rank === 8 && (
        <div
          id={"cell-rank" + cell.coordinates.rank}
          style={{
            position: "absolute",
            left: `calc(${
              board.files.indexOf(cell.coordinates.file) + 1
            } * var(--cell-size) + (4.7 * var(--cell-size)))`,
            bottom: `calc(50% - (4.3 * var(--cell-size)))`,
            zIndex: 101,
          }}
        >
          <span>{cell.coordinates.file}</span>
        </div>
      )}
      <div
        onClick={() => setActivePiece(cell)}
        id={`${cell.coordinates.name}`}
        className={["cell", cell.color].join(" ")}
      >
        <FigureComponent cell={cell} board={board} />
      </div>
    </>
  );
};

// {
//   /* <div style={{ display: "flex", flexDirection: "column" }}> */
// }
// {
//   /* <div
//           style={{
//             position: "absolute",
//             top: 5,
//             right: 15,
//             margin: "auto",
//             opacity: "0.2",
//             userSelect: "none",
//           }}
//         >
//           <div>
//             <span style={{ color: "black" }}>
//               {Number(cell.coordinates.x).toString()}
//             </span>
//             <span style={{ color: "black" }}>
//               {Number(cell.coordinates.y).toString()}
//             </span>
//           </div>
//           <div>
//             <span style={{ color: "black" }}>{cell.coordinates.file}</span>
//             <span style={{ color: "black" }}>
//               {Number(cell.coordinates.rank).toString()}
//             </span>
//           </div>
//         </div> */
// }
// {
//   /* </div> */
// }
