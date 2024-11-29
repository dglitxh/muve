export const getMovies = async () => {
  const tkn = process.env.REACT_APP_API_TOKEN;
  const key = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}`;
  const options = {
    headers: {
      accept: "application/json",
    },
  };
  try {
    let req = await fetch(url, options);
    let res = req.json();
    return res;
  } catch (err) {
    return err;
  }
};
