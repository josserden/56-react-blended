import { Grid, GridItem } from 'components';
import { Link, useLocation } from 'react-router-dom';
import { routes } from 'helpers';

export const CountryList = ({ countries }) => {
  const location = useLocation();
  return (
    <Grid>
      {countries.map(({ id, country, flag }) => (
        <Link
          to={`${routes.COUNTRY}/${id}`}
          state={{
            from: location,
          }}
        >
          <GridItem key={id}>
            <img src={flag} alt={country} />
          </GridItem>
        </Link>
      ))}
    </Grid>
  );
};
