import React, { useEffect, useState } from "react";

import "./App.css";
import { BoardComponent } from "./Components/BoardComponent";
import { Board } from "./Models/Board";
import { Colors } from "./Models/Colors";
import { Figure } from "./Models/Figures/Figure";
import { King } from "./Models/Figures/King";

function App() {
  const defaultPos = "nbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
  const [board, setBoard] = useState(new Board());
  const [currentCell, setCurrentCell] = useState();

  const init = () => {
    const newBoard = new Board();
    newBoard.initializeBoard();

    console.log(newBoard.cells[0][0].figure = new King(Colors.BLACK, true));
    setBoard(newBoard);
  };

  useEffect(() => {
    init();
  }, []);

  function fenTest(fenPosition: String) {
    const rows = fenPosition.split("/");

    rows.forEach((row) => {
      let symbols = row.split("");
    });
  }

  fenTest(defaultPos);

  return (
    <div className="app">
      <BoardComponent board={board} />
    </div>
  );
}

export default App;
