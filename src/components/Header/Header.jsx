import React from 'react';
import {
  Box,
  Container,
  Heading,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import Modal from '../Modal';
import Form from '../Form';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header" py="10px">
      <Container
        maxW="1280px"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Heading as="h1" size="lg">
          Phonebook
        </Heading>

        <Button onClick={onOpen} colorScheme="teal">
          Open Modal
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <Form onClose={onClose} />
        </Modal>
      </Container>
    </Box>
  );
};

export default Header;
