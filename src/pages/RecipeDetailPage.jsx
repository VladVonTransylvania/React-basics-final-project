import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetailPage = () => {
  const [recipeDetails, setRecipeDetails] = useState(null);
  const { id } = useParams(); // Get the recipe ID from URL

  useEffect(() => {
    // Fetch the recipe details based on the recipe ID
    // This is a placeholder for your fetch logic
    const fetchRecipeDetails = async () => {
      const response = await fetch(`your_api_endpoint/${id}`);
      const data = await response.json();
      setRecipeDetails(data);
    };

    fetchRecipeDetails();
  }, [id]);

  if (!recipeDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Display recipe details */}
      <h1>{recipeDetails.name}</h1>
      {/* more details here */}
    </div>
  );
};

export default RecipeDetailPage;
