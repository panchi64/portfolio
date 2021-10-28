import { Container, Flex, VStack } from "@chakra-ui/react";
import Cart from "../components/cart";
import Details from "../components/details";

const IndexPage = () => {
  return (
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
  );
};

export default IndexPage;
