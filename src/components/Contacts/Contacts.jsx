import React from 'react';
import PropTypes from 'prop-types';
import { Grid, GridItem } from '@chakra-ui/react';
import ContactCard from '../ContactCard/index.js';

const Contacts = ({ contacts }) => {
  return (
    <Grid as="ul" templateColumns="repeat(3, 1fr)" gap={6}>
      {contacts.map(contact => (
        <ContactCard key={contact.id} {...contact} />
      ))}
    </Grid>
  );
};

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ),
};
