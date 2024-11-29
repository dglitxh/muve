import React from "react";

export default function MovieCard() {
  return (
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div class="py-3 sm:max-w-xl sm:mx-auto">
        <div class="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
          <div class="h-48 overflow-visible w-1/2">
            <img
              class="rounded-3xl shadow-lg"
              src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg"
              alt=""
            />
          </div>
          <div class="flex flex-col w-1/2 space-y-4">
            <div class="flex justify-between items-start">
              <h2 class="text-3xl font-bold">Sweet Tooth: El niño ciervo</h2>
              <div class="bg-yellow-400 font-bold rounded-xl p-2">7.2</div>
            </div>
            <div>
              <div class="text-sm text-gray-400">Series</div>
              <div class="text-lg text-gray-800">2019</div>
            </div>
            <p class=" text-gray-400 max-h-40 overflow-y-hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div class="flex text-2xl font-bold text-a">$83.90</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Cardi = () => {
  let movie = {};
  return (
    <div class="flex items-center justify-center h-screen bg-[#0d1829] ">
      <div class=" mx-auto bg-white rounded-3xl shadow-xl">
        <div class="grid rounded-3xl max-w-[360px] shadow-sm bg-slate-100  flex-col">
          <img
            src="https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_QL75_UX380_CR0,1,380,562_.jpg"
            width="360"
            height="200"
            class="rounded-t-3xl justify-center h-80 grid object-cover"
            alt="movie.title"
          />

          <div class="group p-5 grid z-10">
            <a
              href={`${movie.link}`}
              class="group-hover:text-cyan-700 font-bold md:text-2xl line-clamp-2"
            >
              Spider-Man: Across the Spider-Verse
            </a>
            <span class="text-slate-400 pt-2 font-semibold">(2023)</span>
            <div class="h-20">
              <span class="line-clamp-3 py-2 h-20 leading-6 text-sm font-light leading-relaxed">
                Miles Morales catapults across the Multiverse, where he
                encounters a team of Spider-People charged with protecting its
                very existence. When the heroes clash on how to handle a new
                threat, Miles must redefine what it means to be a hero.
              </span>
            </div>
            <div class=" grid-cols-2 flex group justify-between">
              <div class="font-black flex flex-col">
                <span class="text-yellow-500 text-xl">IMDB SCORE</span>
                <span class="text-3xl flex gap-x-1 items-center group-hover:text-yellow-600">
                  8.8
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                        fill="#eab308"
                      />{" "}
                    </g>
                  </svg>
                </span>
              </div>
              <div class="flex flex-col items-end">
                <div class="h-7" />
                <span class="text-3xl  font-bold  gap-x-2 text-slate-300">
                  # 8
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};