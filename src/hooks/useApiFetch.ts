import axios from "axios";
import React, { useState, useEffect } from "react";

const useApiFetch = (url: string, value: string | undefined) => {
  const [data, setData] = useState<string>("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLaoading] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLaoading(true);
        const resonce = await axios.get(url + value);
        if (resonce?.data) {
          setData(resonce?.data);
        }
      } catch (e) {
        setError(true);
      } finally {
        setIsLaoading(false);
      }
    };

    if (url && value) {
      getData();
    }
  }, []);

  return { data, error, isLoading };
};

export default useApiFetch;
