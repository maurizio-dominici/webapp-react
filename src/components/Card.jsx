import { Link } from "react-router-dom";

export default function Card({ image, title, link, linkText, description }) {
  return (
    <div className="card h-100 shadow-sm border-0">
      {image && (
        <img
          className="card-img-top img-fluid"
          src={image}
          alt={title}
          style={{ objectFit: "cover", height: "200px" }}
        />
      )}
      <div className="card-body d-flex flex-column">
        {title && <h5 className="card-title">{title}</h5>}
        {description && <p className="card-text flex-grow-1">{description}</p>}

        {link && (
          <Link to={link} className="btn btn-primary mt-auto">
            {linkText || "see more"}
          </Link>
        )}
      </div>
    </div>
  );
}
