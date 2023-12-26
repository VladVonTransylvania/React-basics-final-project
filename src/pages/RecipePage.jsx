import {
  VStack,
  Heading,
  Image,
  Text,
  Box,
  Badge,
  SimpleGrid,
} from "@chakra-ui/react";
import BackButton from '../components/ui/BackButton';

// Component to display details of a selected recipe
export const RecipePage = ({ recipe }) => {

  // Display a message if no recipe is selected
  if (!recipe) return <Text>No recipe selected</Text>;

  return (
    // Main container for the recipe page
    <Box
      maxWidth="700px"
      mx="auto"
      overflow="hidden"
      minHeight="100vh"
      pb="10"
      backgroundColor="rgba(255, 255, 255, 0.7)" // Semi-transparent white
    >
      {/* Back button to navigate to the previous page */}
      <BackButton />

      {/* Image of the recipe */}
      <Image
        src={recipe.image}
        alt={recipe.label}
        width="100%"
        height="300px"
        objectFit="cover"
      />
      {/* Container for recipe content */}
      <VStack align="stretch" m="6" mb="1">
        {/* Displaying meal type of the recipe */}
        <Text fontWeight="semibold" fontSize="sm" color="gray.600">
          {recipe.mealType.join(", ")}
        </Text>

        {/* Grid layout for recipe details */}
        <SimpleGrid columns={2} spacing={10}>
          {/* First column for main recipe details */}
          <Box>
            {/* Recipe title */}
            <Heading size="md">{recipe.label}</Heading>

            {/* Cooking time and servings */}
            <Text fontSize="md" mt="4">
              Total Cooking Time: {recipe.totalTime} minutes
            </Text>
            <Text fontSize="md">Servings: {recipe.yield}</Text>

            {/* Ingredients heading and list */}
            <Heading size="sm" mt="3">
              Ingredients
            </Heading>
            {recipe.ingredientLines.map((ingredient, index) => (
              <Text key={index} fontSize="sm">
                {ingredient}
              </Text>
            ))}
          </Box>

          {/*Second column for additional details like health labels, diet labels, etc.*/}
          <Box align="start">
            <Heading size="sm">Health Labels</Heading>
            {recipe.healthLabels.map((label, index) => (
              <Badge key={index} colorScheme="purple" mr="2">
                {label}
              </Badge>
            ))}

            {/* Conditional rendering for diet labels */}
            {recipe.dietLabels && recipe.dietLabels.length > 0 && (
              <>
                <Heading size="sm" mt="4">
                  Diet Labels
                </Heading>
                {recipe.dietLabels.map((label, index) => (
                  <Badge key={index} colorScheme="green" m="1">
                    {label}
                  </Badge>
                ))}
              </>
            )}

            {/* Conditional rendering for cautions */}
            {recipe.cautions && recipe.cautions.length > 0 && (
              <>
                <Heading size="sm" mt="4">
                  Cautions
                </Heading>
                <Badge colorScheme="red" px="2">
                  {recipe.cautions.join(", ")}
                </Badge>
              </>
            )}

            {/* Conditionally rendering the Total Nutrients section if recipe data is available */}
            {recipe.totalNutrients && (
              <Box mt="4">
                <Heading size="sm">Total Nutrients</Heading>
                <SimpleGrid
                  columns={{ base: 1, sm: 2, lg: 4 }} // Responsive columns layout
                  spacing={2}
                  fontWeight="semibold"
                  fontSize="xs"
                  color="gray.600"
                  p={3}
                  alignItems="start"
                >
                  {/* Each VStack represents a column for a specific nutrient */}
                  {/* CALORIES */}
                  <VStack spacing={0.5}>
                    <Text fontSize="xs">
                      {Math.round(recipe.totalNutrients.ENERC_KCAL?.quantity)}
                    </Text>
                    <Text fontSize="xs">CALORIES</Text>
                  </VStack>

                  {/* CARBS */}
                  <VStack spacing={0.5}>
                    <Text fontSize="xs">
                      {Math.round(recipe.totalNutrients.CHOCDF?.quantity)}{" "}
                      {recipe.totalNutrients.CHOCDF?.unit}
                    </Text>
                    <Text fontSize="xs">CARBS</Text>
                  </VStack>

                  {/* PROTEIN */}
                  <VStack spacing={0.5}>
                    <Text fontSize="xs">
                      {Math.round(recipe.totalNutrients.PROCNT?.quantity)}{" "}
                      {recipe.totalNutrients.PROCNT?.unit}
                    </Text>
                    <Text fontSize="xs">PROTEIN</Text>
                  </VStack>

                  {/* FAT */}
                  <VStack spacing={0.5}>
                    <Text fontSize="xs">
                      {Math.round(recipe.totalNutrients.FAT?.quantity)}{" "}
                      {recipe.totalNutrients.FAT?.unit}
                    </Text>
                    <Text fontSize="xs">FAT</Text>
                  </VStack>

                  {/* CHOLESTEROL */}
                  <VStack spacing={0.5}>
                    <Text fontSize="xs">
                      {Math.round(recipe.totalNutrients.CHOLE?.quantity)}{" "}
                      {recipe.totalNutrients.CHOLE?.unit}
                    </Text>
                    <Text fontSize="xs">CHOLESTEROL</Text>
                  </VStack>

                  {/* SODIUM */}
                  <VStack spacing={0.5} pl={4}>
                    <Text fontSize="xs">
                      {Math.round(recipe.totalNutrients.NA?.quantity)}{" "}
                      {recipe.totalNutrients.NA?.unit}
                    </Text>
                    <Text fontSize="xs">SODIUM</Text>
                  </VStack>
                </SimpleGrid>
              </Box>
            )}
          </Box>
        </SimpleGrid>
      </VStack>
    </Box>
  );
};
