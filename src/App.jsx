import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Clubs from "./Components/Clubs";
import Gallery from "./Components/Gallery";
function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/clubs"} element={<Clubs />}></Route>
        <Route path={"/gallery"} element={<Gallery />}></Route>
      </Routes>
    </>
  );
}

export default App;
