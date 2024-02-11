import { PhonebookSection, PhonebookTitle } from './Phonebook.styled';
export const Section = ({ title, children }) => {
  return (
    <PhonebookSection>
      <PhonebookTitle>{title}</PhonebookTitle>
      {children}
    </PhonebookSection>
  );
};
