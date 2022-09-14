import { FC, useEffect, useState } from "react";
import { Board } from "../Models/Board";
import { Cell } from "../Models/Cell";

interface FigureProps {
  cell: Cell;
  board: Board;
}

export const FigureComponent: FC<FigureProps> = ({ cell, board }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      const idx = board.cells.findIndex((arr) =>
        arr.findIndex((item) => item.color === "WHITE")
      );
    }
  });

  return (
    <div className="figure">
      {cell.figure?.image && (
        <img
          className="figure-image"
          src={cell.figure?.image}
          onClick={() => {
            setActive(!active);
            // console.log(cell.figure?.coordinates, cell.figure?.name);
          }}
          alt="chess-piece"
        />
      )}
    </div>
  );
};
