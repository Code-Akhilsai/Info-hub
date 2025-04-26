import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Clubs from "./Components/Clubs";
import Gallery from "./Components/Gallery";
import Layout from "./Components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="clubs" element={<Clubs />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
