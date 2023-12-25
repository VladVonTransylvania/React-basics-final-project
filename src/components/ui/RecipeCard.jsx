import { Box, Image, Text, VStack, Badge } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const RecipeCard = ({ recipe, onRecipeSelect }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onRecipeSelect(recipe);
    navigate("/recipe"); // Navigates to the RecipePage for the selected recipe
  };

   const isVegan = recipe.healthLabels.includes("Vegan");
   const isVegetarian = recipe.healthLabels.includes("Vegetarian");
   
  return (
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
      <Image
        src={recipe.image}
        alt={recipe.label}
        width="100%"
        height="200px"
        objectFit="cover"
      />
      <VStack spacing="2" align="center" p="3">
        <Text fontWeight="semibold" fontSize="sm" color="gray.600">
          {recipe.mealType.join(", ")}
        </Text>
        <Text fontWeight="bold" fontSize="lg" textAlign="center">
          {recipe.label}
        </Text>
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
        <Text fontSize="sm">Dish: {recipe.dishType.join(", ")}</Text>
        {recipe.cautions.length > 0 && (
          <VStack spacing="1">
            <Text fontSize="sm" fontWeight="semibold">
              Cautions:
            </Text>
            <Badge
              colorScheme="red"
              px="1" // Adjust padding for different screen sizes
              fontSize="xs"
              whiteSpace="normal" // Allow text to wrap
            >
              {recipe.cautions.join(", ")}
            </Badge>
          </VStack>
        )}
      </VStack>
    </Box>
  );
};