import { Filter } from './Filter';
import { Section } from './Section';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Component } from 'react';
import { v1 as uuidv1 } from 'uuid';

class PhonebookHandler extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  addContact = (newName, number) => {
    if (
      this.state.contacts.some(
        ({ name }) => name.toLowerCase() === newName.toLowerCase()
      )
    ) {
      alert(`${newName} is already in contacts`);
      return;
    }

    const newContact = {
      id: uuidv1(),
      name: newName,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  addFilter = filter => {
    this.setState(() => ({
      filter: filter,
    }));
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const filtered = contacts.filter(person =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filtered;
  };

  onDelete = deletedId => {
    const listAfterDelete = this.state.contacts.filter(
      person => person.id !== deletedId
    );
    this.setState(() => ({
      contacts: listAfterDelete,
    }));
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm addContact={this.addContact} />
        </Section>
        {this.state.contacts.length > 0 && (
          <Section title="Contacts">
            <Filter filter={this.addFilter} />
            <ContactList
              contacts={
                this.state.filter.length > 0
                  ? this.filterContacts()
                  : this.state.contacts
              }
              onDelete={this.onDelete}
            />
          </Section>
        )}
      </>
    );
  }
}

export default PhonebookHandler;
