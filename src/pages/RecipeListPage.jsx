import { useState } from "react";
import {
  Center,
  Heading,
  SimpleGrid,
  Input,
  Box,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { RecipeCard } from "../components/ui/RecipeCard";
import { data } from "../utils/data";

// Component to render the list of recipes
export const RecipeListPage = ({ onRecipeSelect }) => {

  // State hooks for managing search term and diet filter
  const [searchTerm, setSearchTerm] = useState("");
  const [dietFilter, setDietFilter] = useState("");

  // Filtering recipes based on search term and diet filter
  const filteredRecipes = data.hits.filter((hit) => {
    const recipe = hit.recipe;

    // Matching recipe label and health labels with the search term
    const labelMatch = recipe.label
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const healthLabelMatch = recipe.healthLabels.some((label) =>
      label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Applying diet filter if selected
    if (dietFilter) {
      return (
        recipe.healthLabels.includes(dietFilter) &&
        (labelMatch || healthLabelMatch)
      );
    }

    return labelMatch || healthLabelMatch;
  });

  // Handler for changing the diet filter
  const handleDietFilterChange = (dietType) => {
    setDietFilter(dietType);
  };

  return (
    // Main container for the recipe list page with styling
    <Box
      backgroundColor="#87CEEB"
      minHeight="100vh"
      px={{ sm: "2", md: "6", lg: "12" }} // Sets responsive horizontal padding
      pb="6"
    >
      {/* Center component to align and organize children elements */}
      <Center flexDir="column" pt="10">
        <Heading mb="6" color="black">
          Winky Recipes
        </Heading>

        {/* Input field for searching recipes */}
        <Input
          placeholder="Search recipes..."
          onChange={(e) => setSearchTerm(e.target.value)}
          mb="6"
          w="full"
          maxWidth="400px"
          backgroundColor="white"
          style={{
            boxShadow: "0 0 10px 2px rgba(300, 300, 300, 0.7)", // Futuristic shadow
            transition: "0.2s",
          }}
        />

        {/* Group of buttons for diet-based recipe filtering */}
        <ButtonGroup mb="50" size="md" spacing="5">
          {/* Button to show all recipes */}
          <Button
            onClick={() => handleDietFilterChange("")}
            isActive={dietFilter === ""}
            colorScheme="blue"
            boxShadow="0 0 10px 2px rgba(300, 300, 300, 0.7)"
            transition="0.2s"
            _hover={{
              transform: "scale(1.09)",
              boxShadow: "0 0 8px 4px rgba(300, 300, 300, 3.0)",
            }}
          >
            All
          </Button>

          {/* Button to filter Vegan recipes */}
          <Button
            onClick={() => handleDietFilterChange("Vegan")}
            isActive={dietFilter === "Vegan"}
            colorScheme="blue"
            boxShadow="0 0 10px 2px rgba(300, 300, 255, 0.7)"
            transition="0.2s"
            _hover={{
              transform: "scale(1.09)",
              boxShadow: "0 0 8px 4px rgba(300, 300, 300, 3.0)",
            }}
          >
            Vegan
          </Button>

          {/* Button to filter Vegetarian recipes */}
          <Button
            onClick={() => handleDietFilterChange("Vegetarian")}
            isActive={dietFilter === "Vegetarian"}
            colorScheme="blue"
            boxShadow="0 0 10px 2px rgba(300, 300, 255, 0.7)"
            transition="0.2s"
            _hover={{
              transform: "scale(1.09)",
              boxShadow: "0 0 8px 4px rgba(300, 300, 300, 3.0)",
            }}
          >
            Vegetarian
          </Button>
        </ButtonGroup>

        {/* SimpleGrid to display recipe cards in a responsive grid layout */}
        <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing="10">
          {/* Mapping through filtered recipes and rendering RecipeCard components */}
          {filteredRecipes.map((hit, index) => (
            <RecipeCard
              key={index} // Unique key for each element in a list
              recipe={hit.recipe} // Passing recipe data to the RecipeCard
              onRecipeSelect={onRecipeSelect} // Function to handle recipe selection
            />
          ))}
        </SimpleGrid>
      </Center>
    </Box>
  );
};
