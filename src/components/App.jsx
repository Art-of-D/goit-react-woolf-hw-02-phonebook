import { Filter } from './Phonebook/Filter/Filter';
import { Section } from './Phonebook/Section/Section';
import { ContactForm } from './Phonebook/ContactForm/ContactForm';
import { ContactList } from './Phonebook/ContactList/ContactList';
import { Component } from 'react';
import { v1 as uuidv1 } from 'uuid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name: newName, number }) => {
    console.log(newName);
    console.log(this.state.contacts);
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

  addFilter = newFilter => {
    this.setState(() => ({
      filter: newFilter,
    }));
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(person =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  onDelete = deletedId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(person => person.id !== deletedId),
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
              contacts={this.filterContacts()}
              onDelete={this.onDelete}
            />
          </Section>
        )}
      </>
    );
  }
}

export default App;
