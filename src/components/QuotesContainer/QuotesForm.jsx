import { useState } from 'react';
import styled from 'styled-components';
import MongodbService from '../../services/mongodbService';
import { v4 as uuidv4 } from 'uuid';

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

const QuotesForm = ({ getFormData }) => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const _mongodbService = new MongodbService();

  const saveNewQuote = (evt) => {
    evt.preventDefault();

    _mongodbService.saveQuote({ id: uuidv4(), quote, author, isEditable: false }).then(() => {
      getFormData({ id: uuidv4(), quote, author, isEditable: false });
      setQuote('');
      setAuthor('');
    });
  };

  return (
    <QuotesFormStyled onSubmit={saveNewQuote}>
      <FormGroupStyled>
        <label>Quote</label>
        <InputStyled type='text' onInput={(evt) => setQuote(evt.target.value)} value={quote} />
      </FormGroupStyled>

      <FormGroupStyled>
        <label>Author</label>
        <InputStyled type='text' onInput={(evt) => setAuthor(evt.target.value)} value={author} />
      </FormGroupStyled>

      <FormGroupStyled>
        <SubmitButtonStyled type='subbmit'>Add</SubmitButtonStyled>
      </FormGroupStyled>
    </QuotesFormStyled>
  );
};

export default QuotesForm;
