import { useState } from 'react';
import { PhonebookForm, PhonebookInputButton } from './ContactForm.styled';

export const ContactForm = ({ addContact }) => {
  const [contact, setData] = useState({
    name: '',
    number: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    addContact(contact);
    setData({ name: '', number: '' });
  };
  return (
    <PhonebookForm onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={contact.name}
        onChange={e => setData({ ...contact, name: e.target.value })}
        pattern="^[a-zA-Zа-яА-Я]+(['\s\-][a-zA-Zа-яА-Я]+)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="phone-number">Number:</label>
      <input
        type="tel"
        name="number"
        id="phone-number"
        value={contact.number}
        onChange={e => setData({ ...contact, number: e.target.value })}
        pattern="^(\+\d{1,3}\s?)?(\(\d{1,4}\)|\d{1,4})[\s\-]?\d{1,18}$"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <PhonebookInputButton
        type="submit"
        value="Add contact"
      ></PhonebookInputButton>
    </PhonebookForm>
  );
};
