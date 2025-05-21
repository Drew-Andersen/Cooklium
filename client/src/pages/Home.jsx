import { useState, useEffect } from "react";
// import axios from "axios";
import FeaturedRecipesCarousel from "../components/carousel/FeaturedRecipesCarousel";

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
        _id: '1',
        title: 'Spaghetti Bolognese',
        imageUrl: 'https://picsum.photos/300/200',
        category: 'Pasta',
      },
      {
        _id: '2',
        title: 'Grilled Chicken Salad',
        imageUrl: 'https://picsum.photos/300/200',
        category: 'Salad',
      },
      {
        _id: '3',
        title: 'Beef Tacos',
        imageUrl: 'https://picsum.photos/300/200',
        category: 'Mexican',
      },
      {
        _id: '4',
        title: 'Sushi Platter',
        imageUrl: 'https://picsum.photos/300/200',
        category: 'Japanese',
      },
      {
        _id: '5',
        title: 'Margherita Pizza',
        imageUrl: 'https://picsum.photos/300/200',
        category: 'Pizza',
      },
      {
        _id: '6',
        title: 'Chicken Alfredo',
        imageUrl: 'https://picsum.photos/300/200',
        category: 'Pasta',
      },
      {
        _id: '7',
        title: 'Vegan Buddha Bowl',
        imageUrl: 'https://picsum.photos/300/200',
        category: 'Vegan',
      },
      {
        _id: '8',
        title: 'Pancakes with Syrup',
        imageUrl: 'https://picsum.photos/300/200',
        category: 'Breakfast',
      },
    ];

    setRecipes(mockRecipes);
  }, []);

  return (
    <>
      <div className="home-container">
        <header className="hero">
          <h1>
            Welcome to <span className="text-primary">Cooklium</span>
          </h1>
          <p className="lead">
            Discover, cook, and share your favorite recipes.
          </p>
        </header>

        <section className="search-bar">
          {/* Include your Search component or input here */}
        </section>

        <FeaturedRecipesCarousel recipes={recipes} />
      </div>
    </>
  );
}
