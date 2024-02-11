import {
  PhonebookList,
  PhonebookListElements,
  PhonebookDeleteButton,
} from './Phonebook.styled';

export const ContactList = ({ contacts, onDelete }) => {
  const handleDelete = id => {
    onDelete(id);
  };
  return (
    <PhonebookList>
      {contacts.map(({ id, name, number }) => {
        return (
          <PhonebookListElements key={id}>
            {name}: {number}
            <PhonebookDeleteButton onClick={() => handleDelete(id)}>
              Delete
            </PhonebookDeleteButton>
          </PhonebookListElements>
        );
      })}
    </PhonebookList>
  );
};
