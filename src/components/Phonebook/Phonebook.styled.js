import styled from 'styled-components';

export const PhonebookSection = styled.section`
  padding: 15px;
`;

export const PhonebookTitle = styled.h2`
  margin-top: 15px;
  font-size: larger;
  font-weight: bold;
  text-decoration: underline;
`;

export const PhonebookForm = styled.form`
  display: flex;
  gap: 30px;
  padding: 10px;
  height: 20px;
  width: 615px;
  border-radius: 5px;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
`;

export const PhonebookFilterForm = styled.form`
  display: flex;
  gap: 30px;
  padding: 10px;
  height: 20px;
  width: 615px;
  border-radius: 5px;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
`;

export const PhonebookList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 5px;
`;

export const PhonebookListElements = styled.li`
  list-style: none;
  position: relative;
  display: flex;
  gap: 10px;
  border-radius: 5px;
  padding: 10px;
  width: 615px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
`;

export const PhonebookDeleteButton = styled.button`
  position: absolute;
  top: 50%;
  left: 90%;
  transform: translateY(-50%);
  background-color: white;
  color: black;
  border-radius: 5px;
  border-color: transparent;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
  padding: 5px 10px;
`;
