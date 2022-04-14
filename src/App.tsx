import { ArticlesTable } from "./features/ArticlesTable";
import { ChakraProvider, Heading, VStack } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <VStack>
        <Heading>News article list</Heading>
        <ArticlesTable />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
