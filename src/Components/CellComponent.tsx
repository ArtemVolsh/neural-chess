import React, { FC, useState } from "react";
import { Cell } from "../Models/Cell";

interface CellProps {
  cell: Cell;
}

export const CellComponent: FC<CellProps> = ({ cell }) => {
  return (
    <div className={["cell", cell.color].join(" ")}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* <div>
            <span style={{ color: "white" }}>{Number(cell.coordinates.x).toString()}</span>
            <span style={{ color: "white" }}>{Number(cell.coordinates.y).toString()}</span>
          </div> */}
        {/* <div>
          <span style={{ color: "white" }}>{cell.coordinates.file}</span>
          <span style={{ color: "white" }}>
            {Number(cell.coordinates.rank).toString()}
          </span>
        </div> */}

        <div>
          {cell.figure?.image && (
            <img className="figure-image" src={cell.figure.image} />
          )}
        </div>
      </div>
    </div>
  );
};
