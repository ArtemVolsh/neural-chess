import { Coordinates } from "../Coordinates";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import BlackFigureImage from "../../Assets/Figures/black-bishop.png";
import WhiteFigureImage from "../../Assets/Figures/white-bishop.png";

export class Bishop extends Figure {
  canMove: Boolean;
  image: typeof BlackFigureImage;
  name: FigureNames;
  coordinates: Coordinates | null;

  constructor(color: Colors, canMove: Boolean, coordinates: Coordinates) {
    super(color, canMove, coordinates, FigureNames.BISHOP);

    this.canMove = canMove;
    this.image = color === Colors.BLACK ? BlackFigureImage : WhiteFigureImage;
    this.name = FigureNames.BISHOP;
    this.coordinates = coordinates;
  }
}
