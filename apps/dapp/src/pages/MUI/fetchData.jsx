import { useState, useEffect } from 'react';

const useAPI = (url) => {
  const [loading, toggleLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const controller = new AbortController();
    toggleLoading(true);
    const fetchLeaders = async () => {
      try {
        const response = await fetch(url, { signal: controller.signal });
        const data = await response.json();
        setData(data);
        toggleLoading(false);
      } catch (e) {
        console.error(e);
        setError(e);
      }
    }
    fetchLeaders();

    return () => {
      controller.abort();
    }
  }, []);

  return { loading, data, error };
}

export default useAPI