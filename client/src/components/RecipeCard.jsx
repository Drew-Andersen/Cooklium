import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function RecipeCard({ recipe }) {
  if (!recipe) return null;

  return (
    <>
      {/* <div className="col-md-4 mb-4">
        <div className="card h-100 shadow-sm">
            <h1>Recipe Card</h1>
          <img
            src={recipe.imageUrl || "https://via.placeholder.com/300x200"}
            className="card-img-top"
            alt={recipe.title}
            style={{ objectFit: "cover", height: "200px" }}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{recipe.title}</h5>
            <p className="card-text text-muted mb-2">{recipe.category}</p>
            <Link
              to="" {`/recipes/${recipe._id}`}
              className="btn btn-primary mt-auto"
            >
              View Recipe
            </Link>
          </div>
        </div>
      </div> */}

      <div className="col-md-4 mb-4 px-2">
        <div className="card h-100 shadow-sm">
          <img
            src={recipe.imageUrl || "https://via.placeholder.com/300x200"}
            className="card-img-top"
            alt={recipe.title}
            style={{ objectFit: "cover", height: "200px" }}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{recipe.title}</h5>
            <p className="card-text text-muted">{recipe.category}</p>
            {/* Placeholder Link for now */}
            <Link
              to={`/recipes/${recipe._id}`}
              className="btn btn-primary mt-auto"
            >
              View Recipe
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

RecipeCard.propTypes = {
    recipe: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      imageUrl: PropTypes.string,
    }).isRequired,
  };