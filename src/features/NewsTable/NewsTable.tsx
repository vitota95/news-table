import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Link,
  Button,
} from "@chakra-ui/react";
import { useGetNewsQuery } from "../../api/NewsApi";

export function NewsTable() {
  const {
    data: search,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetNewsQuery("");

  console.log(search);
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>News list</TableCaption>
        <Thead>
          <Tr>
            <Th>Author</Th>
            <Th>Title</Th>
            <Th>Number of Comments</Th>
            <Th>Url</Th>
          </Tr>
        </Thead>
        {isSuccess && (
          <Tbody>
            {search?.hits?.map((article) => (
              <>
                <Tr>
                  <Td>{article.author}</Td>
                  <Td>{article.title}</Td>
                  <Td>{article.num_comments}</Td>
                  <Td>
                    <Button>
                      <Link href={article.url}>Link to article</Link>
                    </Button>
                  </Td>
                </Tr>
              </>
            ))}
          </Tbody>
        )}
      </Table>
    </TableContainer>
  );
}
