import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useCallback(async (url, options) => {
    let json;
    let response;
    try {
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (!response.ok) throw new Error(json.message);
      return { response, json };
    } catch (err) {
      setError(err.message);
      json = null;
    } finally {
      setLoading(false);
      setData(json);
    }
  }, []);

  return { data, loading, error, request };
};

export default useFetch;
