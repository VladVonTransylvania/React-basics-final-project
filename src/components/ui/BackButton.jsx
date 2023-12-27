import { Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

const BackButton = () => {
  return (
    <Button
      onClick={() => window.history.back()}
      variant="ghost"
      w="400"
      height="50px"
      borderLeftRadius={0}
      backgroundColor="rgba(255, 255, 255, 0.4)"
      _hover={{
        bg: "#87CEEB",
        transform: "scale(1.05)", // Slightly enlarge the button
        boxShadow: "md", // Add shadow for depth
      }}
      _active={{
        bg: "#007ACC", // Darker blue when pressed
        transform: "scale(0.95)", // Slightly shrink the button for a "pop" effect
      }}
    >
      <ArrowBackIcon boxSize={8} color="black" />
    </Button>
  );
};

export default BackButton;
