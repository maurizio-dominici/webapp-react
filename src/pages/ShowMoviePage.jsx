// IMPORTS
import { useParams } from "react-router-dom";

export default function ShowMoviePage() {
  const { id } = useParams();
  return (
    <>
      <section>
        <div className="container">
          <h1>movie {id}</h1>
          <p>
            <strong>descrizione</strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            sint! Possimus repudiandae iste totam neque quas quae assumenda
            aliquid aut unde optio itaque cumque similique, corporis
            voluptatibus ipsa necessitatibus. Repellat?
          </p>
          <p>
            <strong>immagine:</strong>
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>recensioni</h2>
          <p>lista delle recenzioni</p>
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
