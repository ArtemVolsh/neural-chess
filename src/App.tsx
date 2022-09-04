import React, { useEffect, useState, createContext } from "react";

import "./App.css";
import { BoardComponent } from "./Components/BoardComponent";
import { Board } from "./Models/Board";
import { Colors } from "./Models/Colors";
import { Coordinates } from "./Models/Coordinates";
import { Figure } from "./Models/Figures/Figure";
import { King } from "./Models/Figures/King";

function App() {
  const [board, setBoard] = useState(new Board());

  const init = () => {
    const newBoard = new Board();
    newBoard.initializeBoard();

    setBoard(newBoard);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="app">
      <BoardComponent board={board} />
    </div>
  );
}

export default App;
