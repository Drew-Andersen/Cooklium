import { useState, useEffect } from "react";
// import axios from "axios";
import RecipeCard from "../components/RecipeCard";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("/api/recipes")
  //     .then((res) => setRecipes(res.data))
  //     .catch((err) => console.error(err));
  // }, []);

  useEffect(() => {
    const mockRecipes = [
      {
        _id: "1",
        title: "Spaghetti Bolognese",
        category: "Dinner",
        imageUrl: "https://picsum.photos/300/200",
      },
      {
        _id: "2",
        title: "Vegan Tacos",
        category: "Lunch",
        imageUrl: "https://picsum.photos/300/200",
      },
      {
        _id: "3",
        title: "Pancakes",
        category: "Breakfast",
        imageUrl: "https://picsum.photos/300/200",
      },
    ];

    setRecipes(mockRecipes);
  }, []);

  return (
    <>
      <div className="home-container">
        <section className="hero">
          <h1>
            Welcome to <span className="text-primary">Cooklium</span>
          </h1>
          <p className="lead">
            Discover, cook, and share your favorite recipes.
          </p>
        </section>

        <section className="search-bar">
          {/* Include your Search component or input here */}
        </section>

        <section className="featured-recipes">
          <h2>Featured Recipes</h2>
          <div className="recipe-grid d-flex">
            {recipes.slice(0, 6).map((recipe, index) => (
              <RecipeCard key={recipe._id || index} recipe={recipe} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
