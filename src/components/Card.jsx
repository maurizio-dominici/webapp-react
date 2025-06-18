import { Link } from "react-router-dom";

export default function Card({ image, title, link, linkText, description }) {
  return (
    <div className="card">
      {image && <img className="card-image-top w-25" src={image} alt={title} />}
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        {description && <p>{description}</p>}

        {link && (
          <Link to={link} className="btn btn-primary">
            {linkText ? linkText : "see more"}
          </Link>
        )}
      </div>
    </div>
  );
}
