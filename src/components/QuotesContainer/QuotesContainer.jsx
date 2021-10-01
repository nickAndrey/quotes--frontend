import { useEffect, useMemo, useState } from 'react';
import MongodbService from '../../services/MongodbService';
import QuotesForm from './QuotesForm';
import QuotesList from './QuotesList/QuotesList';

const QuotesContainer = () => {
  const [data, setData] = useState([]);

  const _mongodbService = useMemo(() => new MongodbService(), []);

  useEffect(() => {
    _mongodbService.getQuotes().then(({ data }) => setData(data));
  }, [_mongodbService]);

  const getFormData = (formData) => setData([...data, formData]);

  const removeQuoteFromList = (removedItemId) =>
    setData(data.filter((item) => item.id !== removedItemId));

  return (
    <>
      <QuotesForm getFormData={getFormData} />
      <QuotesList quotesListData={data} removeItem={removeQuoteFromList} />
    </>
  );
};

export default QuotesContainer;
