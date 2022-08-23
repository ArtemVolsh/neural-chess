import { Board } from "./Board";
export class Position {
  fenPosition: String;
  // TODO Evaluation
  constructor(fenPosition: String) {
    this.fenPosition = fenPosition;
  }

  public buildFenPosition(fenPosition: string, board: Board) {
    const rows = fenPosition.split("/");

    rows.forEach((row) => {
      let symbols = row.split("");
    });
  }
}

// rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR
