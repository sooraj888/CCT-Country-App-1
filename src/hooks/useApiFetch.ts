import axios, { AxiosResponse } from "axios";
import React, { useState, useEffect } from "react";

export type useApiFetchType = {
  data: any;
  error: boolean;
  isLoading: boolean;
};

const useApiFetch = (
  url: string,
  value: string | undefined
): useApiFetchType => {
  const [data, setData] = useState<any>("");
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLaoading] = useState<boolean>(false);

  useEffect(() => {
    const getData = async (): Promise<any> => {
      try {
        setIsLaoading(true);
        const resonce: AxiosResponse<any, any> = await axios.get(url + value);
        if (resonce?.data) {
          setData(resonce?.data);
        } else {
          setError(true);
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
