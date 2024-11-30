import React from "react";

export const Detail = (props) => {
  const movie = props.movie;
  return (
    <div class="flex justify-center items-center">
      {" "}
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="poster"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                MOVIE NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {movie["original_title"]}
              </h1>
              <div className="flex mb-4">
                <span className="text-gray-600 ml-1 ">
                  {movie["vote_count"]} Reviews
                </span>
              </div>
              <p className="leading-relaxed">{movie["overview"]}</p>

              <div className="flex my-8 justify-right">
                <button
                  onClick={() => {}}
                  className="flex mx-2 text-white bg-blue-500 border-0 py-2 px-2 focus:outline-none hover:bg-blue-600 rounded"
                >
                  Watch
                </button>
                <button
                  onClick={() => {
                    props.handleClose();
                  }}
                  className="flex mx-2 text-white bg-red-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-600 rounded"
                >
                  close
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
