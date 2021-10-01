import { useState } from 'react';
import QuotesForm from './QuotesForm';
import QuotesList from './QuotesList';

const QuotesContainer = () => {
  const [data, setData] = useState([]);

  const getFormData = (formData) => setData([...data, formData]);

  return (
    <>
      <QuotesForm getFormData={getFormData} />
      <QuotesList quotesListData={data} />
    </>
  );
};

export default QuotesContainer;
