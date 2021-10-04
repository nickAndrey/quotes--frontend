import { useState } from 'react';
import styled from 'styled-components';
import MongodbService from '../../../services/mongodbService';

const ListItemStyed = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px 0;

  .quote-actions {
    opacity: 0;
    transition: all 0.3s;
    display: flex;
    gap: 5px;
  }

  &:hover {
    .quote-actions {
      opacity: 1;
    }
  }
`;

const ButtonStyled = styled.button`
  grid-column: 3/-1;
  padding: 4px 8px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: #f0f0f0;
  transition: all 0.2s;
  box-sizing: border-box;

  &:hover {
    background: #ccc;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const TextareaStyled = styled.textarea`
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  background: #f0f0f0;
`;

const QuotesListItem = ({ quoteItem, removeItem }) => {
  const [editable, setEditable] = useState(false);
  const [quoteValue, setQuoteValue] = useState(quoteItem.quote);

  const _mongodbService = new MongodbService();

  const handleEditQuote = (evt) => setQuoteValue(evt.target.value);

  const saveEditedQuote = (evt) => {
    _mongodbService
      .updateQuote(quoteItem.id, {
        ...quoteItem,
        quote: evt.target.value,
      })
      .then(() => setEditable(!editable));
  };

  const handleRemoveQuote = (id) => _mongodbService.deleteQuote(id).then(() => removeItem(id));

  return (
    <ListItemStyed>
      {editable ? (
        <TextareaStyled
          rows='1'
          onChange={handleEditQuote}
          onBlur={saveEditedQuote}
          value={quoteValue}
        />
      ) : (
        <span>
          {quoteValue}, <b>{quoteItem.author}</b>
        </span>
      )}

      <div className='quote-actions'>
        <ButtonStyled type='button' onClick={() => setEditable(!editable)}>
          edit
        </ButtonStyled>
        <ButtonStyled type='button' onClick={() => handleRemoveQuote(quoteItem.id)}>
          delete
        </ButtonStyled>
      </div>
    </ListItemStyed>
  );
};

export default QuotesListItem;
