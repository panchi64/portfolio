import { Container, Flex, VStack } from "@chakra-ui/react";
import Cart from "../components/Cart";
import Details from "../components/Details";

const IndexPage = () => {
  return (
    <Container maxWidth="container.xl" padding={0}>
      <Flex height="100vh" paddingY={20}>
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
};

export default IndexPage;
