// IMPORTS
import axios from "axios";
import { useState } from "react";

export default function ReviewForm({ movieId }) {
  const getUrlBe = import.meta.env.VITE_EXPRESS_BE;
  const [formData, setFormData] = useState({
    name: "",
    vote: "",
    text: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(movieId);

    axios
      .post(`${getUrlBe}/movies/${movieId}/reviews`, formData)
      .then((res) => {
        setMessage("Recensione salvata con successo!");
        setFormData({ name: "", vote: "", text: "" });
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.message) {
          setMessage(`Errore: ${error.response.data.message}`);
        } else {
          setMessage("Errore nella richiesta");
        }
        console.error(error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border rounded shadow-sm bg-light"
    >
      <h2 className="mb-4">Lascia una recensione</h2>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Tuo nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="vote" className="form-label">
          Voto (1-5)
        </label>
        <input
          type="number"
          id="vote"
          name="vote"
          className="form-control"
          value={formData.vote}
          onChange={handleChange}
          min="1"
          max="5"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="text" className="form-label">
          Recensione
        </label>
        <textarea
          id="text"
          name="text"
          className="form-control"
          rows="4"
          placeholder="Scrivi qui la tua recensione..."
          value={formData.text}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Invia Recensione
      </button>

      {message && <div className="mt-3 alert alert-info">{message}</div>}
    </form>
  );
}
