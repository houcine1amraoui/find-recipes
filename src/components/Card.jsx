import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types

export default function Card({ recipe }) {
  const { name, thumbnail_url, tags, total_time_minutes, id } = recipe;

  const navigate = useNavigate();

  const navigateToRecipePage = () => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="card" onClick={navigateToRecipePage}>
      <img src={thumbnail_url} alt="" />
      <div className="card-content">
        <h3>{name}</h3>
        <div className="card-info">
          <div className="tag">
            <p>{tags[0].display_name}</p>
          </div>
          <p className="time-text">{total_time_minutes} min.</p>
        </div>
      </div>
    </div>
  );
}
