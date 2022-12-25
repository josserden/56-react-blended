import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from 'components';
import { CountrySearch, Home, Country } from 'pages';
import { routes } from 'helpers';

export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Header />}>
        <Route index element={<Home />} />
        <Route path={routes.COUNTRY} element={<CountrySearch />} />
        <Route path={routes.COUNTRY_ID} element={<Country />} />
      </Route>

      <Route path='*' element={<Navigate to={routes.HOME} replace />} />
    </Routes>
  );
};
