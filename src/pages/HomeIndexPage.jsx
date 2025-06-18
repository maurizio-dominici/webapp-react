import axios from "axios";
import MoviesList from "../components/MoviesList";
import { useEffect, useState } from "react";

const getUrlBe = import.meta.env.VITE_EXPRESS_BE;
export default function HomeIndexPage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(getUrlBe + "/movies").then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <>
      <div className="container">
        <h1>movies</h1>
      </div>

      <MoviesList />
    </>
  );
}
