import React from "react";
import { MovieCard } from "./MovieCard";
import MyModal from "./modal";
import { Detail } from "./Detail";

export default function Catalog(props) {
  const [open, setOpen] = React.useState(false);
  const [openedMovieInd, setOpenedMovieInd] = React.useState({})
  const handleClose = () => setOpen(false);

  return (
    <div className="container mx-auto p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-10  ">
      {props.movieList.map((movie, ind) => {
        return (
          <div
            key={Math.random()}
            className="transform duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
          >
            {" "}
            <button onClick={() => {setOpen(true)
             setOpenedMovieInd(ind)}
          }>
              <MovieCard movie={movie} num={ind+1}/>
            </button>
          </div>
        );
      })}
      <MyModal open={open} handleClose={handleClose} comp={() => <Detail movie={props.movieList[openedMovieInd]} handleClose={handleClose}/>} />
    </div>
  );
}
