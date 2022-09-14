import { Coordinates } from "./../Coordinates";
import { Cell } from "./../Cell";
import { Colors } from "./../Colors";
import BlackFigureImage from "../../Assets/Figures/black-king.png";

export class Figure {
  color: Colors;
  canMove: Boolean;
  moveOptions: Cell[];

  image: typeof BlackFigureImage | null;
  coordinates: Coordinates | null;
  name: FigureNames | null;

  constructor(
    color: Colors,
    canMove: Boolean,
    coordinates: Coordinates | null,
    name: FigureNames | null
  ) {
    this.color = color;
    this.canMove = canMove;
    this.image = null;
    this.coordinates = coordinates;
    this.name = null;
    this.moveOptions = [];
  }

  getMoveOptions() {}
}

export enum FigureNames {
  KING = "KING",
  QUEEN = "QUEEN",
  ROOK = "ROOK",
  BISHOP = "BISHOP",
  KNIGHT = "KNIGHT",
  PAWN = "PAWN",
}
