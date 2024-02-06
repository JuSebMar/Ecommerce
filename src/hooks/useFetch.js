import { useState, useEffect } from "react";

export const useFetch = (url, config = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const { method, body, ...rest } = config;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, {
          method: method ? method : "GET",
          body: body && body,
        });
        if (!res.ok) {
          let err = new Error("Error en la peticion fetch");
          err.status = res.status || "00";
          err.status.Text = res.status.Text || "ocurrio un Error";
          throw err;
        }
        const json = await res.json();
        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (error) {
        if (!signal.aborted) {
          setData(null);
          setError(error);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [url]);

  return { data, error, loading };
};
