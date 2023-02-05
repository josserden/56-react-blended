import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from '@chakra-ui/react';
import contacts from '../Contacts/index.js';
import { formatDate } from '../../utils/formatDate.js';

const ContactCard = ({ id, name, number, createdAt, email }) => {
  return (
    <Card id={id}>
      <CardHeader>
        <Heading size="md"> {name}</Heading>
      </CardHeader>
      <CardBody
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '10px',
        }}
      >
        <Text fontSize={'18px'}>
          <b>Number:</b> {number}
        </Text>
        <Text fontSize={'18px'}>
          <b>Email:</b> {email}
        </Text>
        <Text fontSize={'14px'}>
          <b>Created:</b> {formatDate(createdAt)}
        </Text>
      </CardBody>
      <CardFooter>
        <Button
          colorScheme="teal"
          type="button"
          onClick={() => console.log(id)}
        >
          Delete contact
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContactCard;
