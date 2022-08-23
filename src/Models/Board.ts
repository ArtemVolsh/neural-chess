import { Colors } from "./Colors";
import { Cell } from "./Cell";
import { Coordinates } from "./Coordinates";
import { Position } from "./Position";

export class Board {
  cells: Cell[][] = [];

  constructor() {}

  public files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  public ranks = [1, 2, 3, 4, 5, 6, 7, 8];

  public initializeBoard() {
    // Generating columns
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      // Generating rows
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(
            new Cell(
              Colors.WHITE,
              new Coordinates(j, i, this.files[j], this.ranks[i]),
              null
            )
          );
        } else {
          row.push(
            new Cell(
              Colors.BLACK,
              new Coordinates(j, i, this.files[j], this.ranks[i]),
              null
            )
          );
        }
      }
      this.cells.push(row);
    }
  }

  public initializeFigures(position: Position) {}
}
