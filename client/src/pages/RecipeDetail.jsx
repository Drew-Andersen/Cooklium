import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function RecipeDetail() {
    const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const mockRecipe = {
      _id: id,
      title: 'Spaghetti Bolognese',
      category: 'Dinner',
      imageUrl: 'https://picsum.photos/300/200',
      ingredients: 'Pasta, beef, tomatoes, onions...',
      instructions: 'Boil pasta, cook meat, add sauce...',
    };
    setRecipe(mockRecipe);

  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <>
      <div className="container mt-5">
        <h1>{recipe.title}</h1>
        <img src={recipe.imageUrl} alt={recipe.title} className="img-fluid" />
        <h3>Ingredients</h3>
        <p>{recipe.ingredients}</p>
        <h3>Instructions</h3>
        <p>{recipe.instructions}</p>
      </div>
    </>
  );
}
