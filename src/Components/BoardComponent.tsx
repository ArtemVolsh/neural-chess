import React, { FC } from "react";
import { Board } from "../Models/Board";
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
            <CellComponent cell={cell} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
