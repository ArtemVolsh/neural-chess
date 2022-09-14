export class Coordinates {
  x: number;
  y: number;
  file: string;
  rank: number;
  name: String;

  constructor(x: number, y: number, files: string, rank: number) {
    this.x = x;
    this.y = y;
    this.file = files;
    this.rank = rank;
    this.name = files + rank?.toString();
  }
}
