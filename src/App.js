
import "./App.css";
import { useEffect, useState } from "react";
import { getMovies } from "./Helpers/helpers";
import Catalog from "./Components/catalog";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function movieReq(params) {
      const movieList = await getMovies();
      setMovies(movieList["results"]);
      console.log(movieList, "got it");
    }
    movieReq();
  }, []);
  return (
    <div className="App">
      <h1 className="text-3xl py-4 font-bold underline">Muvee List</h1>
      <Catalog movieList={movies}/>
    </div>
  );
}

export default App;
