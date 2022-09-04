import { Coordinates } from "../Models/Coordinates";
import { Figure } from "./Figures/Figure";

export class Move {
  figure: Figure;
  fromCoordinates: Coordinates;
  toCoordinates: Coordinates;

  constructor(
    figure: Figure,
    fromCoordinates: Coordinates,
    toCoordinates: Coordinates
  ) {
    this.figure = figure;
    this.fromCoordinates = fromCoordinates;
    this.toCoordinates = toCoordinates;
  }
}
