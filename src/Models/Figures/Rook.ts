import { Coordinates } from "../Coordinates";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import BlackFigureImage from "../../Assets/Figures/black-rook.png";
import WhiteFigureImage from "../../Assets/Figures/white-rook.png";

export class Rook extends Figure {
  canMove: Boolean;
  image: typeof BlackFigureImage;
  name: FigureNames;
  coordinates: Coordinates | null;

  constructor(color: Colors, canMove: Boolean, coordinates: Coordinates) {
    super(color, canMove, coordinates, null);

    this.canMove = canMove;
    this.image = color === Colors.BLACK ? BlackFigureImage : WhiteFigureImage;
    this.name = FigureNames.ROOK;
    this.coordinates = coordinates;
  }
}
