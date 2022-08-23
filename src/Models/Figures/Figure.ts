import { Cell } from "./../Cell";
import { Colors } from "./../Colors";
import BlackFigureImage from "../../Assets/Figures/black-king.png";

export class Figure {
  color: Colors;
  canMove: Boolean;
  image: typeof BlackFigureImage | null;
  // currentCell: Cell;

  constructor(color: Colors, canMove: Boolean) {
    this.color = color;
    this.canMove = canMove;
    this.image = null;
  }
}

export enum FigureNames {
  KING = "KING",
  QUEEN = "QUEEN",
  ROOK = "ROOK",
  BISHOP = "BISHOP",
  KNIGHT = "KNIGHT",
  PAWN = "PAWN",
}
