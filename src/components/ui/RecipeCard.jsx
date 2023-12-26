import { Box, Image, Text, VStack, Badge } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// RecipeCard component to display individual recipe information
export const RecipeCard = ({ recipe, onRecipeSelect }) => {
  // Hook to enable navigation to different routes
  const navigate = useNavigate();

  // Function to handle click event on the recipe card
  const handleClick = () => {
    onRecipeSelect(recipe);
    navigate("/recipe"); // Navigates to the RecipePage of the selected recipe
  };

  // Checks to add specific badges based on recipe properties
  const isVegan = recipe.healthLabels.includes("Vegan");
  const isVegetarian = recipe.healthLabels.includes("Vegetarian");

  return (
    // Box component as the main card container with interactive styling
    <Box
      onClick={handleClick}
      boxShadow="base"
      borderRadius="lg"
      cursor="pointer"
      transition="all 0.2s ease"
      _hover={{
        transform: "scale(1.03)", // Slightly scale up the card on hover
      }}
      overflow="hidden"
      backgroundColor="rgba(915, 255, 255, 0.7)" // Semi-transparent white
    >
      {/* Image of the recipe */}
      <Image
        src={recipe.image}
        alt={recipe.label}
        width="100%"
        height="200px"
        objectFit="cover"
      />

      {/* VStack for vertically stacking text and badges */}
      <VStack spacing="2" align="center" p="3">
        <Text fontWeight="semibold" fontSize="sm" color="gray.600">
          {/* Displaying meal types */}
          {recipe.mealType.join(", ")}
        </Text>

        {/* Displaying the recipe's label as the main title */}
        <Text fontWeight="bold" fontSize="lg" textAlign="center">
          {recipe.label}
        </Text>

        {/* Conditionally rendering badges for Vegan and Vegetarian */}
        {isVegan && (
          <Badge colorScheme="purple" mx="1">
            Vegan
          </Badge>
        )}
        {isVegetarian && (
          <Badge colorScheme="purple" mx="1">
            Vegetarian
          </Badge>
        )}

        {/* Displaying diet labels if they exist */}
        {recipe.dietLabels.length > 0 && (
          <Badge
            colorScheme="green"
            px="1"
            fontSize="xs"
            whiteSpace="normal"
            textAlign="center"
          >
            {recipe.dietLabels.join(", ")}
          </Badge>
        )}

        {/* Displaying dish types */}
        <Text fontSize="sm">Dish: {recipe.dishType.join(", ")}</Text>

        {/* Displaying cautions if they exist */}
        {recipe.cautions.length > 0 && (
          <VStack spacing="1">
            <Text fontSize="sm" fontWeight="semibold">
              Cautions:
            </Text>
            <Badge colorScheme="red" px="1" fontSize="xs" whiteSpace="normal">
              {recipe.cautions.join(", ")}
            </Badge>
          </VStack>
        )}
      </VStack>
    </Box>
  );
};