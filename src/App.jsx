import "./css/app.css";
import MovieCard from "./components/MovieCard";
import Favourite from "./pages/Favourite";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  //components name start with capital letter
  return (
    <>
      <main className="main-content">
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/favourite" element={<Favourite />}></Route>
        </Routes>
      </main>
      <Home />
    </>
  );
}

export default App;
