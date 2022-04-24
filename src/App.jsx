import React, { useState } from "react";
import Board from "./components/board";
import { mooveContext } from "./components/context/context";
function App() {
  const [firstStep, setFirstStep] = useState('1')
  return (
    <mooveContext.Provider value = {{
      firstStep,
      setFirstStep
    }} >
    <div className="App">
      <Board/>

    </div>
  </mooveContext.Provider>
  );
}

export default App;
