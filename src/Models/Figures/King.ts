import { Coordinates } from "./../Coordinates";
import { Colors } from "./../Colors";
import { Figure, FigureNames } from "./Figure";
import BlackFigureImage from "../../Assets/Figures/black-king.png";
import WhiteFigureImage from "../../Assets/Figures/white-king.png";

export class King extends Figure {
  canMove: Boolean;
  image: typeof BlackFigureImage;
  name: FigureNames;
  coordinates: Coordinates | null;

  constructor(color: Colors, canMove: Boolean, coordinates: Coordinates) {
    super(color, canMove, coordinates, FigureNames.KING);

    this.canMove = canMove;
    this.image = color === Colors.BLACK ? BlackFigureImage : WhiteFigureImage;
    this.name = FigureNames.KING;
    this.coordinates = coordinates;
  }
}
