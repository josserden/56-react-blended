import { useState } from 'react';
import { Heading } from '@chakra-ui/react';

const BASE_URL = 'https://6251bfb67f7fa1b1ddde85d8.mockapi.io/api';
const API_URL = `${BASE_URL}/users`;
const App = () => {
  return (
    <Heading as="h1" size="4xl" noOfLines={1}>
      (4xl) In love with React & Next
    </Heading>
  );
};

export default App;
