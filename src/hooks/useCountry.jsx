import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';
import { routes } from 'helpers';

export const useCountry = () => {
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { name } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectToCurrentPath = location?.state?.from?.pathname ?? routes.HOME;

  useEffect(() => {
    const getCountry = async () => {
      setIsLoading(true);

      try {
        const data = await fetchCountry(name);
        setCountry(data);
      } catch (error) {
        navigate(routes.HOME, { replace: true });
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getCountry();
  }, [name, navigate]);

  return { country, isLoading, isError, redirectToCurrentPath };
};
