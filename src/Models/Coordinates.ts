export class Coordinates {
  x: Number;
  y: Number;
  file: String;
  rank: Number;
  name: String;

  constructor(x: Number, y: Number, files: String, rank: Number) {
    this.x = x;
    this.y = y;
    this.file = files;
    this.rank = rank;
    this.name = String(files) + Number(rank).toString();
  }
}
