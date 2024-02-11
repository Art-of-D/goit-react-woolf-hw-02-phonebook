import { PhonebookFilterForm } from './Phonebook.styled';
export const Filter = ({ filter }) => {
  const handleFilter = event => {
    event.preventDefault();
    filter(event.target.value);
  };

  return (
    <PhonebookFilterForm onChange={handleFilter}>
      <label htmlFor="find-contact">Find contacts by name</label>
      <input
        type="text"
        name="find-contact"
        id="find-contact"
        pattern="^[a-zA-Zа-яА-Я]+(['\s\-][a-zA-Zа-яА-Я]+)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      ></input>
    </PhonebookFilterForm>
  );
};
