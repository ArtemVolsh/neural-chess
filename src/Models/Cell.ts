import { Colors } from "./Colors";
import { Coordinates } from "./Coordinates";
import { Figure } from "./Figures/Figure";

export class Cell {
  color: Colors;
  coordinates: Coordinates;
  figure: Figure | null;

  constructor(color: Colors, coordinates: Coordinates, figure: Figure | null) {
    this.color = color;
    this.coordinates = coordinates;
    this.figure = figure;
  }
}
