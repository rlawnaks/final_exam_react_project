import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Board from "./Board";
import Write from "./Write";

function App() {

return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<Board />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  </div>
)
}

export default App;
