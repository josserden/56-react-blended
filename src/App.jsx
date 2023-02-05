import { useQuery } from 'react-query';
import { Heading } from '@chakra-ui/react';
import { fetchUsers } from './utils/api.js';

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

  console.log(contacts);

  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

// Наш додаток виглядає так:
// є метод fetchUsers, який викликається при монтуванні компонента - він викликає API і отримує дані про користувачів (метод GET)
// є метод createUser, який викликається при натисканні на кнопку - він викликає API і створює нового користувача (метод POST)
// є метод deleteUser, який викликається при натисканні на кнопку - він викликає API і видаляє користувача (метод DELETE)
