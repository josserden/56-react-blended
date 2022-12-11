import axios from 'axios';

axios.defaults.baseURL = 'https://6251bfb67f7fa1b1ddde85d8.mockapi.io/api';
axios.defaults.params = {
  limit: 10,
};

// GET
export const getContacts = async () => {
  const { data } = await axios.get('/contacts?page=1');

  return data;
};

// POST

export const addContact = async (contact) => {
  const { data } = await axios.post('/contacts', contact);

  return data;
};
