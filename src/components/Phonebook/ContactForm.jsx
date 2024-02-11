import { PhonebookForm } from './Phonebook.styled';

export const ContactForm = ({ addContact }) => {
  const handleSubmit = event => {
    event.preventDefault();
    addContact(event.target[0].value, event.target[1].value);
  };
  return (
    <PhonebookForm onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+(['\s\-][a-zA-Zа-яА-Я]+)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="phone-number">Number:</label>
      <input
        type="tel"
        name="number"
        id="phone-number"
        pattern="^(\+\d{1,3}\s?)?(\(\d{1,4}\)|\d{1,4})[\s\-]?\d{1,18}$"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <input type="submit" value="Add contact"></input>
    </PhonebookForm>
  );
};
