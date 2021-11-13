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
  useBreakpointValue,
} from "@chakra-ui/react";

const Details = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });

  return (
    <VStack
      width="full"
      height="full"
      padding={10}
      spacing={10}
      alignItems="flex-start"
    >
      {/* The title of the section */}
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Order details</Heading>
        <Text>If you already have an account, click here to log in.</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} width="full">
        {/* The First Name area*/}
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="Ben" />
          </FormControl>
        </GridItem>
        {/* The Last Name area */}
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Dover" />
          </FormControl>
        </GridItem>
        {/* The Address bar */}
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="123 Fake Street" />
          </FormControl>
        </GridItem>
        {/* The city area */}
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="Raccoon City" />
          </FormControl>
        </GridItem>
        {/* The country select box */}
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value="usa">United States of America</option>
              <option value="soa">South Africa</option>
              <option value="chi">China</option>
              <option value="can">Canada</option>
              <option value="pur">Puerto Rico</option>
            </Select>
          </FormControl>
        </GridItem>
        {/* The shipping address select checkbox */}
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>
            Shipping address is the same as billing address
          </Checkbox>
        </GridItem>
        {/* The place order button */}
        <GridItem colSpan={2}>
          <Button variant="primary" size="lg" width="full">
            Place Order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Details;
