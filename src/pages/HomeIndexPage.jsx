import axios from "axios";
import MoviesList from "../components/MoviesList";
import { useEffect, useState } from "react";

const getUrlBe = import.meta.env.VITE_EXPRESS_BE;
export default function HomeIndexPage() {
  const [getMovies, setGetMovies] = useState([]);

  useEffect(() => {
    axios.get(getUrlBe + "/movies").then((res) => {
      setGetMovies(res.data.movies);
    });
  }, []);

  return (
    <>
      <div className="container">
        <h1>movies</h1>
      </div>

      <MoviesList movies={getMovies} />
    </>
  );
}
