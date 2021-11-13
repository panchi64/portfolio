import { ChakraProvider, Container, Flex, VStack } from "@chakra-ui/react";
import Cart from "../../components/tutorial/cart";
import Details from "../../components/tutorial/details";
import tutorialTheme from "../../theme/tutorial";

const IndexPage = () => {
  return (
    <ChakraProvider theme={tutorialTheme}>
      <Container maxWidth="container.xl" padding={0}>
        <Flex
          height={{ base: "auto", md: "100vh" }}
          paddingY={[0, 10, 20]}
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Details />
          <Cart />
        </Flex>
      </Container>
    </ChakraProvider>
  );
};

export default IndexPage;
