export class Coordinates {
  x: Number;
  y: Number;
  file: String;
  rank: Number;

  constructor(
    x: Number,
    y: Number,
    files: String,
    ranks: Number
  ) {
    this.x = x;
    this.y = y;
    this.file = files;
    this.rank = ranks;
  }
}
