import React, { FC, useEffect, useState } from "react";
import { Board } from "../Models/Board";
import { Cell } from "../Models/Cell";
import { CellComponent } from "./CellComponent";

interface BoardProps {
  board: Board;
}

export const BoardComponent: FC<BoardProps> = ({ board }) => {
  const [activePiece, setActivePiece] = useState<Cell | null>(null);

  const activePieceChangeHandler = (cell: Cell) => {
    setActivePiece(cell);
  };

  useEffect(() => {
    if (activePiece) console.log(activePiece);
    else {
      console.log("No active piece");
    }
  }, [activePiece]);

  return (
    <div className="board">
      {board.cells.map((row, idx) => (
        <React.Fragment key={idx}>
          {row.map((cell) => (
            <CellComponent
              key={
                cell.coordinates.file + Number(cell.coordinates.rank).toString()
              }
              cell={cell}
              board={board}
              setActivePiece={activePieceChangeHandler}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
