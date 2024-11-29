import { React } from "react";
import { MovieCard } from "./MovieCard";

export default function Catalog(props) {
  return (
    <div className="container m-3 p-3 md:p-0 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-10 items-start ">
      {props.movieList.map((movie) => {
        return (
          <div key={Math.random()}>
            {" "}
            <button
              data-modal-target="default-modal"
              data-modal-toggle="default-modal"
              type="button"
            >
              <MovieCard />
            </button>
          </div>
        );
      })}
    </div>
  );
}
