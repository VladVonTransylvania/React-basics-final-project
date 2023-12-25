import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage"; 
import { Box } from "@chakra-ui/react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <Router>
      <Box backgroundColor="#00bfff" minHeight="100vh">
        <Routes>
          <Route
            path="/"
            element={<RecipeListPage onRecipeSelect={setSelectedRecipe} />}
          />
          <Route
            path="/recipe"
            element={<RecipePage recipe={selectedRecipe} />}
          />
        </Routes>
      </Box>
    </Router>
  );
};
