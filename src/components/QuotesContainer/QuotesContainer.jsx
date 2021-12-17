import { useEffect, useMemo, useState } from 'react';
import MongodbService from '../../services/mongodbService';
import QuotesForm from './QuotesForm';
import QuotesList from './QuotesList/QuotesList';

const QuotesContainer = () => {
  const [quotesList, setQuotesList] = useState([]);

  const _mongodbService = useMemo(() => new MongodbService(), []);

  useEffect(() => {
    _mongodbService.getQuotes().then(({ results }) => setQuotesList(results));
  }, [_mongodbService]);

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
