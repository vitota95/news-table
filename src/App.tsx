import { NewsTable } from "./features/NewsTable";
import { ChakraProvider, Heading, VStack } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <VStack>
        <Heading>News article list</Heading>
        <NewsTable />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
