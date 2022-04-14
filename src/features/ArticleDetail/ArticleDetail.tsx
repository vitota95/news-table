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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
  ModalCloseButton,
  ModalOverlay,
  Text,
  useDisclosure,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import { useGetArticleQuery } from "../../api/ArticlesApi";

export interface ArticleDetailModalProps {
  isOpen: boolean;
  onClose: VoidFunction;
  id: string;
}

export function ArticleDetailModal(props: ArticleDetailModalProps) {
  const { isOpen, onClose, id } = props;
  const {
    data: article,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetArticleQuery(id);

  console.log(article);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Article Details</ModalHeader>
        <ModalCloseButton />
        {isLoading ? (
          <Center>
            <Spinner />
          </Center>
        ) : (
          <ModalBody>
            <Text fontWeight="semibold">Title: {article?.title}</Text>
            <Text fontWeight="semibold">
              Creation date: {article?.created_at}
            </Text>
            <Text fontWeight="semibold">Points: {article?.points}</Text>
            <Text fontWeight="semibold">Type: {article?.type}</Text>
          </ModalBody>
        )}

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
