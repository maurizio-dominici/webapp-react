export default function ReviewsList({ reviews }) {
  return (
    <div className="container">
      <div className="row">
        {reviews !== undefined &&
          reviews.map((review) => (
            <div className="review">
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
                {review.vote}
              </p>
              <br />
            </div>
          ))}
      </div>
    </div>
  );
}
