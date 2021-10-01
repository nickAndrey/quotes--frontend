const fetchOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const fetchData = async (url, options = null) => {
  const setOptions = fetchOptions ? { ...fetchOptions, ...options } : options;
  const resp = await fetch(url, setOptions);

  if (!resp.ok) {
    throw new Error(resp.statusText);
  }
  return await resp.json();
};

export default fetchData;
