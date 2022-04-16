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
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useGetArticlesQuery } from "../../api/ArticlesApi";
import { Article } from "../../types/ArticlesTypes";
import { ArticleDetailModal } from "../ArticleDetail";
import { SearchInput } from "../SearchInput";

export function ArticlesTable() {
  const [searchString, setSearchString] = useState("");

  const makeQuery = () => {
    return `query="${searchString}"`;
  };

  const {
    data: search,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
    refetch,
  } = useGetArticlesQuery(makeQuery());

  useEffect(() => {
    searchString && refetch();
  }, [refetch, searchString]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedArticle, setSelectedArticle] = useState<Article>();

  return (
    <>
      <VStack>
        <TableContainer>
          <SearchInput onChange={(text) => setSearchString(text)}></SearchInput>
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
            {!isLoading && (
              <Tbody>
                {search?.hits?.map((article, index) => (
                  <>
                    <Tr
                      key={index}
                      onClick={() => {
                        setSelectedArticle(article);
                        onOpen();
                      }}
                      cursor="pointer"
                    >
                      <Td>{article.author}</Td>
                      <Td>{article.title}</Td>
                      <Td>{article.num_comments}</Td>
                      <Td>
                        <Button
                          onClick={(event) => {
                            event.stopPropagation();
                          }}
                        >
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
        {isOpen && (
          <ArticleDetailModal
            isOpen={isOpen}
            onClose={onClose}
            id={selectedArticle?.objectID ?? ""}
          />
        )}
      </VStack>
    </>
  );
}
