const BASE_URL = 'https://6251bfb67f7fa1b1ddde85d8.mockapi.io/api';
const API_URL = `${BASE_URL}/contacts`;

export const fetchUsers = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }

  return response.json();
};
