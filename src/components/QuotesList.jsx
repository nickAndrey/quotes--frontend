import styled from 'styled-components';
import QuotesListItem from './QuotesListItem';

const QuotesList = ({ quotesListData }) => {
  if (!quotesListData.length) {
    return (
      <ContainerStyled>
        <h4>Empty list</h4>
      </ContainerStyled>
    );
  }

  return (
    <ContainerStyled>
      <ListStyled>
        {quotesListData.map((quote) => (
          <QuotesListItem quoteItem={quote} key={quote.id} />
        ))}
      </ListStyled>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.section`
  margin: auto;
  padding: 0;
  max-width: 400px;
`;

const ListStyled = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export default QuotesList;
