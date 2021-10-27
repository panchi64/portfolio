import { Container, Flex, VStack } from "@chakra-ui/react";
import Cart from "../components/cart";
import Details from "../components/details";

const IndexPage = () => {
  return (
    <Container maxWidth="container.xl" paddingLeft={10} paddingRight={10}>
      <Flex height="100vh" paddingY={20}>
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
};

export default IndexPage;
