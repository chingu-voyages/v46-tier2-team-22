async function fetchData(method, url, setData) {
  const response = await fetch(url, {
    method: method,
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  });
  const data = await response.json();
  if (data && data.results) {
    setData(data.results);
  }
}

export default fetchData;
