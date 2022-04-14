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
} from "@chakra-ui/react";
import { useState } from "react";
import { useGetArticlesQuery } from "../../api/ArticlesApi";
import { Article } from "../../types/ArticlesTypes";
import { ArticleDetailModal } from "../ArticleDetail";

export function ArticlesTable() {
  const {
    data: search,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetArticlesQuery("");

  console.log(search);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedArticle, setSelectedArticle] = useState<Article>();

  return (
    <>
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
              {console.log("aqui")}
              {search?.hits?.map((article, index) => (
                <>
                  <Tr
                    key={index}
                    onClick={() => {
                      setSelectedArticle(article);
                      onOpen();
                    }}
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
    </>
  );
}
