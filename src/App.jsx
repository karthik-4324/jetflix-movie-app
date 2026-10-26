import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "../src/pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Watchlist from "./pages/Watchlist.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
