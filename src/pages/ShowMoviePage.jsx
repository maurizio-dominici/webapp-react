// IMPORTS
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ReviewsList from "../components/ReviewsList";

export default function ShowMoviePage() {
  const [movie, setMovie] = useState({});
  const getUrlBe = import.meta.env.VITE_EXPRESS_BE;

  const { id } = useParams();

  useEffect(() => {
    axios.get(getUrlBe + "/movies/" + id).then((res) => {
      console.log(res.data.movie);
      setMovie(res.data.movie);
    });
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <h1>{movie.title}</h1>
          <p>
            <strong>descrizione: </strong>
            {movie.abstract}
          </p>
          <p>
            <strong>direct by: </strong>
            {movie.director}
          </p>
          <p>
            <strong>genre: </strong>
            {movie.genre}
          </p>
          <p>
            <strong>immagine:</strong>
            <img
              className="w-35"
              src={`http://localhost:3000/images/`}
              alt={movie.title}
            />
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>recensioni</h2>
          <ReviewsList reviews={movie.reviews} />
        </div>
      </section>

      <section>
        <div className="container">
          <h2>la tua recensione</h2>
          <p>form per le recenzioni</p>
        </div>
      </section>
    </>
  );
}
