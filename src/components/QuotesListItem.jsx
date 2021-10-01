import { useState } from 'react';
import styled from 'styled-components';

const QuotesListItem = ({ quoteItem }) => {
  const [editable, setEditable] = useState(false);

  const handleEditQuote = () => {
    // make request.
  }

  return (
    <ListItemStyed>
      {editable ? (
        <input type='text' onChange={handleEditQuote} value={quoteItem.quote}/>
      ) : (
        <span>
          {quoteItem.quote}, <b>{quoteItem.author}</b>
        </span>
      )}

      <div className='quote-actions'>
        <StyledButton type='button' onClick={() => setEditable(!editable)}>
          edit
        </StyledButton>
        <StyledButton type='button'>delete</StyledButton>
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

export default QuotesListItem;
