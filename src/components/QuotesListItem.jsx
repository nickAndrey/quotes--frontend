import { useState } from 'react';
import styled from 'styled-components';
import GetDataService from '../services/getData';

const QuotesListItem = ({ quoteItem, removeItem }) => {
  const [editable, setEditable] = useState(false);
  const [quoteValue, setQuoteValue] = useState(quoteItem.quote);

  const _service = new GetDataService();

  const handleEditQuote = (evt) => {
    _service.updateQuote(quoteItem.id, { ...quoteItem, quote: evt.target.value });
    setQuoteValue(evt.target.value);
  };

  const handleRemoveQuote = (id) => {
    _service.deleteQuote(quoteItem.id).then(() => removeItem(id));
  };

  return (
    <ListItemStyed>
      {editable ? (
        <InputStyled rows='1' onChange={handleEditQuote} value={quoteValue} />
      ) : (
        <span>
          {quoteValue}, <b>{quoteItem.author}</b>
        </span>
      )}

      <div className='quote-actions'>
        <StyledButton type='button' onClick={() => setEditable(!editable)}>
          edit
        </StyledButton>
        <StyledButton type='button' onClick={() => handleRemoveQuote(quoteItem.id)}>
          delete
        </StyledButton>
      </div>
    </ListItemStyed>
  );
};

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

const StyledButton = styled.button`
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

const InputStyled = styled.textarea`
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  background: #f0f0f0;
`;

export default QuotesListItem;
