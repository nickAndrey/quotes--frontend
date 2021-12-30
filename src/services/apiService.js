import fetchData from '../utills/fetcher';

export default class APIService {
  baseAPI = 'http://localhost:4300';

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
