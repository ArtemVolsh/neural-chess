import { Coordinates } from "../Coordinates";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import BlackFigureImage from "../../Assets/Figures/black-queen.png";
import WhiteFigureImage from "../../Assets/Figures/white-queen.png";

export class Queen extends Figure {
  canMove: Boolean;
  image: typeof BlackFigureImage;
  name: FigureNames;
  coordinates: Coordinates | null;

  constructor(color: Colors, canMove: Boolean, coordinates: Coordinates) {
    super(color, canMove, coordinates, null);

    this.canMove = canMove;
    this.image = color === Colors.BLACK ? BlackFigureImage : WhiteFigureImage;
    this.name = FigureNames.QUEEN;
    this.coordinates = coordinates;
  }
}
