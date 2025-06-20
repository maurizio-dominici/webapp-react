import Card from "./Card";

export default function MoviesList({ movies }) {
  return (
    <div className="container py-5">
      <div className="row g-4">
        {movies.map((movie) => (
          <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
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
