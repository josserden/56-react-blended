import { useQuery } from 'react-query';
import { Heading, Container, Box } from '@chakra-ui/react';
import { fetchUsers } from './utils/api.js';
import Contacts from './components/Contacts';

const App = () => {
  const {
    data: contacts = [],
    isError,
    isLoading,
  } = useQuery('contacts', fetchUsers);

  if (isLoading) {
    return <Heading>Loading...</Heading>;
  }

  if (isError) {
    return <Heading>Error...</Heading>;
  }

  return (
    <Box as="section" py="60px">
      <Container maxW="1280px">
        <Contacts contacts={contacts} />
      </Container>
    </Box>
  );
};

export default App;

// Наш додаток виглядає так:
// є метод fetchUsers, який викликається при монтуванні компонента - він викликає API і отримує дані про користувачів (метод GET)
// є метод createUser, який викликається при натисканні на кнопку - він викликає API і створює нового користувача (метод POST)
// є метод deleteUser, який викликається при натисканні на кнопку - він викликає API і видаляє користувача (метод DELETE)
