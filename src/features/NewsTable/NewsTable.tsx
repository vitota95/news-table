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
} from "@chakra-ui/react";

export function NewsTable() {
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
        <Tbody>
          <Tr
            onClick={() => {
              console.log("click");
            }}
            cursor="pointer"
          >
            <Td>Merlin</Td>
            <Td>Arthurs sword</Td>
            <Td>100</Td>
            <Td>
              <Link>Go to Url</Link>
            </Td>
          </Tr>
          <Tr
            onClick={() => {
              console.log("click");
            }}
            cursor="pointer"
          >
            <Td>Merlin</Td>
            <Td>Arthurs sword</Td>
            <Td>100</Td>
            <Td>
              <Link>Go to Url</Link>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
