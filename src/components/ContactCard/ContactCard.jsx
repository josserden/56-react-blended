import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { formatDate } from '../../utils/formatDate.js';

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from '@chakra-ui/react';
import { removeUser } from '../../utils/api.js';

const ContactCard = ({ id, name, number, createdAt, email }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(removeUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('contacts');
    },
  });

  return (
    <Card id={id} as="li">
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
          onClick={() => {
            mutation.mutate(id);
          }}
        >
          Delete contact
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContactCard;
