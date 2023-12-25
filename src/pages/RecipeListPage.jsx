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

export const RecipeListPage = ({ onRecipeSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dietFilter, setDietFilter] = useState(""); // State for diet filter

  const filteredRecipes = data.hits.filter((hit) => {
    const recipe = hit.recipe;
    const labelMatch = recipe.label
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const healthLabelMatch = recipe.healthLabels.some((label) =>
      label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Check if a diet filter is applied and match recipes accordingly
    if (dietFilter) {
      return (
        recipe.healthLabels.includes(dietFilter) &&
        (labelMatch || healthLabelMatch)
      );
    }

    return labelMatch || healthLabelMatch;
  });

  const handleDietFilterChange = (dietType) => {
    setDietFilter(dietType);
  };

  return (
    <Box
      backgroundColor="#00bfff"
      minHeight="100vh"
      px={{ sm: "2", md: "6", lg: "12" }}
      pb="6"
    >
      <Center flexDir="column" pt="10">
        <Heading mb="6" color="white">
          Winky Recipes
        </Heading>

        <Input
          placeholder="Search recipes..."
          onChange={(e) => setSearchTerm(e.target.value)}
          mb="6"
          w="full"
          maxWidth="400px"
          backgroundColor="white"
        />
        {/* Diet filter buttons */}
        <ButtonGroup mb="50" size="md" spacing="5">
          {" "}
          {/* Adjusted size and added spacing */}
          <Button
            onClick={() => handleDietFilterChange("")}
            isActive={dietFilter === ""}
            colorScheme="blue"
            _hover={{
              transform: "scale(1.03)",
              boxShadow: "xl",
            }}
          >
            All
          </Button>
          <Button
            onClick={() => handleDietFilterChange("Vegan")}
            isActive={dietFilter === "Vegan"}
            colorScheme="blue"
            _hover={{
              transform: "scale(1.03)",
              boxShadow: "xl",
            }}
          >
            Vegan
          </Button>
          <Button
            onClick={() => handleDietFilterChange("Vegetarian")}
            isActive={dietFilter === "Vegetarian"}
            colorScheme="blue"
            _hover={{
              transform: "scale(1.03)",
              boxShadow: "xl",
            }}
          >
            Vegetarian
          </Button>
        </ButtonGroup>
        <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing="10">
          {filteredRecipes.map((hit, index) => (
            <RecipeCard
              key={index}
              recipe={hit.recipe}
              onRecipeSelect={onRecipeSelect}
            />
          ))}
        </SimpleGrid>
      </Center>
    </Box>
  );
};
