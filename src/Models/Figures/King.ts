import { Colors } from "./../Colors";
import { Figure, FigureNames } from "./Figure";
import BlackFigureImage from "../../Assets/Figures/black-king.png";
import WhiteFigureImage from "../../Assets/Figures/white-king.png";

export class King extends Figure {
  canMove: Boolean;
  image: typeof BlackFigureImage;
  name: FigureNames;

  constructor(color: Colors, canMove: Boolean) {
    super(color, canMove);

    this.canMove = canMove;
    this.image = color === Colors.BLACK ? BlackFigureImage : WhiteFigureImage;
    this.name = FigureNames.KING;
  }

	
}
