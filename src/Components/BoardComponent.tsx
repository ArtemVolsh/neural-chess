import React, { FC, MouseEventHandler } from "react";
import { Board } from "../Models/Board";
import { Coordinates } from "../Models/Coordinates";
import { CellComponent } from "./CellComponent";

interface BoardProps {
  board: Board;
}

export const BoardComponent: FC<BoardProps> = ({ board }) => {
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
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
