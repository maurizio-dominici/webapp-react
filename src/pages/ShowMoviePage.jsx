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
      {/* Movie Details */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-5">
              {movie.image && (
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="img-fluid rounded shadow-sm"
                />
              )}
            </div>
            <div className="col-md-7">
              <h1 className="mb-3">{movie.title}</h1>
              <p>
                <strong>Descrizione:</strong> {movie.abstract}
              </p>
              <p>
                <strong>Regista:</strong> {movie.director}
              </p>
              <p>
                <strong>Genere:</strong> {movie.genre}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4">Recensioni</h2>
          <ReviewsList reviews={movie.reviews} />
        </div>
      </section>

      {/* Submit Review Placeholder */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-3">La tua recensione</h2>
          <div className="alert alert-info">Form per le recensioni</div>
        </div>
      </section>
    </>
  );
}
