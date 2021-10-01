import { useState } from 'react';
import styled from 'styled-components';

const QuotesForm = ({ getFormData }) => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const pushNewElementToParent = () => {
    const id = Math.random().toString(16).slice(2); // uniq id generator
    getFormData({ id, quote, author, isEditable: false });
  };

  return (
    <QuotesFormStyled onSubmit={handleSubmit}>
      <FormGroupStyled>
        <label>Quote</label>
        <InputStyled type='text' onInput={(evt) => setQuote(evt.target.value)} />
      </FormGroupStyled>

      <FormGroupStyled>
        <label>Author</label>
        <InputStyled type='text' onInput={(evt) => setAuthor(evt.target.value)} />
      </FormGroupStyled>

      <FormGroupStyled>
        <SubmitButtonStyled onClick={pushNewElementToParent}>Add</SubmitButtonStyled>
      </FormGroupStyled>
    </QuotesFormStyled>
  );
};

const QuotesFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
`;

const InputStyled = styled.input`
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  background: #f0f0f0;
`;

const FormGroupStyled = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: center;
  grid-gap: 10px;
  padding: 15px 10px 0;
`;

const SubmitButtonStyled = styled.button`
  grid-column: 3/-1;
  padding: 6px 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: #f0f0f0;
  transition: all 0.2s;

  &:hover {
    background: #ccc;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default QuotesForm;
