import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage"; 
import { Box } from "@chakra-ui/react";

// Main App component
export const App = () => {
  // State to keep track of the selected recipe
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    // Using React Router for routing
    <Router>
      {/* Box component from Chakra UI for styling */}
      <Box backgroundColor="#00bfff" minHeight="100vh">
        {/* Defining Routes */}
        <Routes>
          {/* Route for the home page that lists all recipes */}
          <Route
            path="/"
            element={<RecipeListPage onRecipeSelect={setSelectedRecipe} />}
          />
          {/* Route for individual recipe details */}
          <Route
            path="/recipe"
            element={<RecipePage recipe={selectedRecipe} />}
          />
        </Routes>
      </Box>
    </Router>
  );
};
