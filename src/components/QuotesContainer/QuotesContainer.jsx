import { useEffect, useMemo, useState } from 'react';
import APIService from '../../services/apiService';
import QuotesForm from './QuotesForm';
import QuotesList from './QuotesList/QuotesList';

const QuotesContainer = () => {
  const [quotesList, setQuotesList] = useState([]);

  const _apiService = useMemo(() => new APIService(), []);

  useEffect(() => {
    _apiService.getQuotes().then(({ results }) => setQuotesList(results));
  }, [_apiService]);

  const getFormData = (formData) => setQuotesList([...quotesList, formData]);

  const removeQuoteFromList = (removedItemId) =>
    setQuotesList(quotesList.filter((item) => item.id !== removedItemId));

  return (
    <>
      <QuotesForm getFormData={getFormData} />
      <QuotesList quotesListData={quotesList} removeItem={removeQuoteFromList} />
    </>
  );
};

export default QuotesContainer;
