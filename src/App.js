import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Board from "./Board";
import Write from "./Write";
import { createContext } from "react";
import Detail from "./Detail";
import Manage from "./Manage";

export const Context = createContext() 

function App() {
  // const [board, setBoard]

  let board = []
  let resume = []

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<Context.Provider value={{board}}><Board /></Context.Provider>} />
          <Route path="/write" element={<Context.Provider value={{board, resume}}><Write /></Context.Provider>} />
          <Route path="/detail" element={<Context.Provider value={{board, resume}}><Detail /></Context.Provider>} />
        </Routes>
      </BrowserRouter>
    </div>
)
}

export default App;
