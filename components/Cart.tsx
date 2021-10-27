import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  GridItem,
  SimpleGrid,
  Select,
  Checkbox,
  Button,
} from "@chakra-ui/react";

const Cart = () => {
  return (
    <VStack
      width="full"
      height="full"
      padding={10}
      spacing={10}
      alignItems="flex-start"
      background="gray.50"
    >
      {/* The title of the section */}
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your Cart</Heading>
        <Text>
          If the price is too hard on your eyes,{" "}
          <Button variant="link" colorScheme="black">
            try changing the theme.
          </Button>
        </Text>
      </VStack>
    </VStack>
  );
};

export default Cart;
