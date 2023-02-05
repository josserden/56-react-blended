import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, VStack } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useQueryClient, useMutation } from 'react-query';
import { addUser } from '../../utils/api.js';

const Form = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const queryClient = useQueryClient();
  const mutation = useMutation(addUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('contacts');
    },
  });

  const handleSubmitForm = data => {
    mutation.mutate(data);

    onClose();
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <VStack spacing={6}>
        <label>
          Name
          <input type="text" {...register('name', { required: true })} />
          {errors.name && <span>This field is required</span>}
        </label>

        <label>
          Number
          <input type="tel" {...register('number', { required: true })} />
          {errors.number && <span>This field is required</span>}
        </label>

        <label>
          Email
          <input type="email" {...register('email', { required: true })} />
          {errors.email && <span>This field is required</span>}
        </label>

        <Button variant="ghost" type={'submit'}>
          Add contact
        </Button>
      </VStack>
    </form>
  );
};

export default Form;

Form.propTypes = {
  onClose: PropTypes.func.isRequired,
};
