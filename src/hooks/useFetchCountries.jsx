import { useState, useEffect } from 'react';
import { getCountries } from 'service/country-service';

export const useFetchCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);

      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { countries, isLoading, isError };
};
