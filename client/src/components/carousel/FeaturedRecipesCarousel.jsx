import { useState } from "react";
import RecipeCard from "../RecipeCard";
import { PropTypes } from "prop-types";
import './carousel.css';

export default function FeaturedRecipesCarousel({ recipes }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(recipes.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const visibleRecipes = recipes.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <>
      <div className="container my-5">
      <h3 className="mb-4">Featured Recipes</h3>

      <div className="carousel-container position-relative">
        <button
          className="carousel-arrow left btn btn-outline-secondary"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          ←
        </button>

        <div className="carousel-slide-wrapper">
          <div className="row carousel-slide">
            {visibleRecipes.map((recipe, index) => (
              <div className="col-md-3 mb-4" key={recipe._id || index}>
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>
        </div>

        <button
          className="carousel-arrow right btn btn-outline-secondary"
          onClick={handleNext}
          disabled={currentIndex === totalPages - 1}
        >
          →
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3">
        {Array.from({ length: totalPages }).map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`carousel-dot ${i === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
    </>
  );
}

FeaturedRecipesCarousel.propTypes = {
    recipes: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string,
        title: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        category: PropTypes.string,
      })
    ).isRequired,
  };