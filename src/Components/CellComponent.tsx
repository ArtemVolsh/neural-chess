import React, { FC, MouseEventHandler, useState } from "react";
import { Cell } from "../Models/Cell";
import { Coordinates } from "../Models/Coordinates";

interface CellProps {
  cell: Cell;
}

export const CellComponent: FC<CellProps> = ({ cell }) => {
  const [active, setActive] = useState(false);

  return (
    <div className={["cell", cell.color].join(" ")}>
      <div className="figure">
        {cell.figure?.image && (
          <img
            className="figure-image"
            src={cell.figure?.image}
            onClick={() => {
              setActive(!active);
              console.log(cell.figure?.coordinates, cell.figure?.name);
            }}
            alt="chess-piece"
          />
        )}
      </div>
    </div>
  );
};

{
  /* <div style={{ display: "flex", flexDirection: "column" }}> */
}
{
  /* <div
          style={{
            position: "absolute",
            top: 5,
            right: 15,
            margin: "auto",
            opacity: "0.2",
            userSelect: "none",
          }}
        >
          <div>
            <span style={{ color: "black" }}>
              {Number(cell.coordinates.x).toString()}
            </span>
            <span style={{ color: "black" }}>
              {Number(cell.coordinates.y).toString()}
            </span>
          </div>
          <div>
            <span style={{ color: "black" }}>{cell.coordinates.file}</span>
            <span style={{ color: "black" }}>
              {Number(cell.coordinates.rank).toString()}
            </span>
          </div>
        </div> */
}
{
  /* </div> */
}
