import Card from "./Card";

export default function MoviesList({ movies }) {
  return (
    <div className="container">
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-4">
            <Card
              title={movie.title}
              description={movie.description}
              image={`http://localhost:3000/images/${movie.image}`}
              link={`/movies/${movie.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
