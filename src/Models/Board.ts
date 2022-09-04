import { Colors } from "./Colors";
import { Cell } from "./Cell";
import { Coordinates } from "./Coordinates";
import { Position } from "./Position";
import { King } from "./Figures/King";
import { Pawn } from "./Figures/Pawn";
import { Queen } from "./Figures/Queen";
import { Rook } from "./Figures/Rook";
import { Knight } from "./Figures/Knight";
import { Bishop } from "./Figures/Bishop";

export class Board {
  cells: Cell[][] = [];

  constructor() {}

  public files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  public ranks = [1, 2, 3, 4, 5, 6, 7, 8];

  private static pushNewCell(
    rank: number,
    file: number,
    row: Cell[],
    files: string[],
    ranks: number[]
  ): Cell {
    if ((rank + file) % 2 !== 0) {
      const whiteCell = new Cell(
        Colors.WHITE,
        new Coordinates(file, rank, files[file], ranks[rank]),
        null
      );
      row.push(whiteCell);
      return whiteCell;
    } else {
      const blackCell = new Cell(
        Colors.BLACK,
        new Coordinates(file, rank, files[file], ranks[rank]),
        null
      );
      row.push(blackCell);
      return blackCell;
    }
  }

  private static initPawns(
    rank: number,
    file: number,
    row: Cell[],
    files: string[],
    ranks: number[]
  ) {
    if (rank === 1) {
      Board.pushNewCell(rank, file, row, files, ranks).figure = new Pawn(
        Colors.WHITE,
        true,
        new Coordinates(file, rank, files[file], ranks[rank])
      );
    } else {
      Board.pushNewCell(rank, file, row, files, ranks).figure = new Pawn(
        Colors.BLACK,
        true,
        new Coordinates(file, rank, files[file], ranks[rank])
      );
    }
  }

  private static initKings(
    rank: number,
    file: number,
    row: Cell[],
    files: string[],
    ranks: number[]
  ) {
    if (rank === 0) {
      Board.pushNewCell(rank, file, row, files, ranks).figure = new King(
        Colors.WHITE,
        true,
        new Coordinates(file, rank, files[file], ranks[rank])
      );
    } else {
      Board.pushNewCell(rank, file, row, files, ranks).figure = new King(
        Colors.BLACK,
        true,
        new Coordinates(file, rank, files[file], ranks[rank])
      );
    }
  }

  private static initQueens(
    rank: number,
    file: number,
    row: Cell[],
    files: string[],
    ranks: number[]
  ) {
    if (rank === 0) {
      Board.pushNewCell(rank, file, row, files, ranks).figure = new Queen(
        Colors.WHITE,
        true,
        new Coordinates(file, rank, files[file], ranks[rank])
      );
    } else {
      Board.pushNewCell(rank, file, row, files, ranks).figure = new Queen(
        Colors.BLACK,
        true,
        new Coordinates(file, rank, files[file], ranks[rank])
      );
    }
  }

  private static initRooks(
    rank: number,
    file: number,
    row: Cell[],
    files: string[],
    ranks: number[]
  ) {
    if (rank === 0) {
      Board.pushNewCell(rank, file, row, files, ranks).figure = new Rook(
        Colors.WHITE,
        true,
        new Coordinates(file, rank, files[file], ranks[rank])
      );
    } else {
      Board.pushNewCell(rank, file, row, files, ranks).figure = new Rook(
        Colors.BLACK,
        true,
        new Coordinates(file, rank, files[file], ranks[rank])
      );
    }
  }

  private static initKnights(
    rank: number,
    file: number,
    row: Cell[],
    files: string[],
    ranks: number[]
  ) {
    if (rank === 0) {
      Board.pushNewCell(rank, file, row, files, ranks).figure = new Knight(
        Colors.WHITE,
        true,
        new Coordinates(file, rank, files[file], ranks[rank])
      );
    } else {
      Board.pushNewCell(rank, file, row, files, ranks).figure = new Knight(
        Colors.BLACK,
        true,
        new Coordinates(file, rank, files[file], ranks[rank])
      );
    }
  }

  private static initBishops(
    rank: number,
    file: number,
    row: Cell[],
    files: string[],
    ranks: number[]
  ) {
    if (rank === 0) {
      Board.pushNewCell(rank, file, row, files, ranks).figure = new Bishop(
        Colors.WHITE,
        true,
        new Coordinates(file, rank, files[file], ranks[rank])
      );
    } else {
      Board.pushNewCell(rank, file, row, files, ranks).figure = new Bishop(
        Colors.BLACK,
        true,
        new Coordinates(file, rank, files[file], ranks[rank])
      );
    }
  }

  public initializeBoard() {
    // Generating files
    for (let rank = 0; rank < 8; rank++) {
      const row: Cell[] = [];
      // Generating ranks
      for (let file = 0; file < 8; file++) {
        // Condition for the pawn ranks for both sides
        switch (rank) {
          // White pawns rank
          case 0:
          case 7:
            switch (file) {
              case 0: // file A
              case 7: // file H
                Board.initRooks(rank, file, row, this.files, this.ranks);
                continue;
              case 1: // file B
              case 6: // file G
                Board.initKnights(rank, file, row, this.files, this.ranks);
                continue;
              case 2:
              case 5:
                Board.initBishops(rank, file, row, this.files, this.ranks);
                continue;
              case 3: // file D
                Board.initQueens(rank, file, row, this.files, this.ranks);
                continue;
              case 4: // file E
                Board.initKings(rank, file, row, this.files, this.ranks);
                continue;
              default:
                Board.pushNewCell(rank, file, row, this.files, this.ranks);
                continue;
            }
            continue;
          case 1:
          case 6:
            Board.initPawns(rank, file, row, this.files, this.ranks);
            continue;
          default:
            Board.pushNewCell(rank, file, row, this.files, this.ranks);
        }
      }
      this.cells.push(row);
    }
    console.log(this.cells);
  }

  public initializeFigures(position: Position) {}
}
