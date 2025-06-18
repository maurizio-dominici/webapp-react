export default function ReviewsList({ reviews }) {
  // funzione per le stelline con bootstrap icons
  const renderStars = (vote) => {
    const fullStars = Math.floor(vote);
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
      } else {
        stars.push(<i key={i} className="bi bi-star text-warning"></i>);
      }
    }

    return stars;
  };

  return (
    <div className="container">
      <div className="row">
        {reviews !== undefined &&
          reviews.map((review) => (
            <div key={review.id} className="review">
              <p>
                <strong>user: </strong>
                {review.name}
              </p>
              <p>
                <strong>text: </strong>
                {review.text}
              </p>
              <p>
                <strong>vote: </strong>
                {renderStars(review.vote)}
              </p>
              <br />
            </div>
          ))}
      </div>
    </div>
  );
}
