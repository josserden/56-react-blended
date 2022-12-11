import React, { Component } from 'react';
import { Button } from './Button';
import { Modal } from './Modal';
import { Form } from './Form/Form';
import * as CONTACT_SERVICE from '../utils/api';

export class Main extends Component {
  state = {
    showModal: false,
    contacts: [],
  };

  componentDidMount() {
    this.getContactsData();
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    console.log('prevState.contacts', prevState.contacts);
    console.log('contacts', contacts);

    if (prevState.contacts !== contacts) {
      return;
    }

    this.getContactsData();
  }

  getContactsData = async () => {
    try {
      const data = await CONTACT_SERVICE.getContacts();

      this.setState({
        contacts: [...data],
      });
    } catch (error) {
      console.error(error);
    }
  };

  addContactData = async (contact) => {
    await CONTACT_SERVICE.addContact(contact);

    this.toggleModal();
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { showModal, contacts } = this.state;

    return (
      <>
        <Button className={'mb-10'} onClick={this.toggleModal}>
          Add Contact
        </Button>

        <ul className='grid grid-cols-3 gap-7'>
          {contacts.length &&
            contacts.map(({ id, name, email, number }) => (
              <li
                key={id}
                className='border rounded-md shadow-md bg-slate-100 px-5 py-8 flex flex-col gap-3 '
              >
                <h3 className='text-2xl font-semibold text-gray-700'>{name}</h3>
                <p className=' text-base text-gray-600 font-bold'>{email}</p>
                <p className=' text-base text-gray-600 font-bold'>{number}</p>
              </li>
            ))}
        </ul>

        {showModal && (
          <Modal visible={showModal} toggler={this.toggleModal}>
            <Form onSubmit={this.addContactData} />
          </Modal>
        )}
      </>
    );
  }
}
