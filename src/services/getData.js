import fetchData from './fetcher';

export default class GetDataService {
  baseAPI = 'http://localhost:5000/api';

  saveQuote = (body) =>
    fetchData(`${this.baseAPI}/quotes`, {
      method: 'POST',
      body: JSON.stringify(body),
    });

  updateQuote = (id, body) =>
    fetchData(`${this.baseAPI}/quotes/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
    });

  getQuotes = () => fetchData(`${this.baseAPI}/quotes`);

  deleteQuote = (id) => fetchData(`${this.baseAPI}/quotes/${id}`, { method: 'DELETE' });
}
