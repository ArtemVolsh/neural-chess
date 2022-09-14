import { useEffect, useState } from "react";

import "./App.css";
import { BoardComponent } from "./Components/BoardComponent";
import { Board } from "./Models/Board";

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
