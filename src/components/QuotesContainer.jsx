import { useEffect, useState } from 'react';
import GetDataService from '../services/getData';
import QuotesForm from './QuotesForm';
import QuotesList from './QuotesList';

const QuotesContainer = () => {
  const [data, setData] = useState([]);
  const _service = new GetDataService();

  useEffect(() => {
    _service.getQuotes().then(({ data }) => setData(data));
  }, []);

  const getFormData = (formData) => {
    return setData([...data, formData]);
  };

  const removeQuoteFromList = (formData) => {
    return setData(data.filter((item) => item.id !== formData));
  };

  return (
    <>
      <QuotesForm getFormData={getFormData} />
      <QuotesList quotesListData={data} removeItem={removeQuoteFromList} />
    </>
  );
};

export default QuotesContainer;
