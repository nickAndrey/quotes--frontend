import { useEffect, useState } from 'react';
import GetDataService from '../services/getData';
import QuotesForm from './QuotesForm';
import QuotesList from './QuotesList';

const QuotesContainer = () => {
  const [data, setData] = useState([]);
  const _service = new GetDataService();

  useEffect(() => {
    _service.getQuotes().then(({data}) => setData(data));
  }, []);

  const getFormData = (formData) => {
    console.log(data);
    return setData([...data, formData])
  };

  return (
    <>
      <QuotesForm getFormData={getFormData} />
      <QuotesList quotesListData={data} />
    </>
  );
};

export default QuotesContainer;
