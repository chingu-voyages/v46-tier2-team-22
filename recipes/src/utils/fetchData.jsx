async function fetchData(method, url) {
  const response = await fetch(url, {
    method: method,
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  });
  return await response.json();
}

export default fetchData;
