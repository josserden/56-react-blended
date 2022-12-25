import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useFetchCountries } from 'hooks';

export const Home = () => {
  const { countries, isLoading, isError } = useFetchCountries();

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}

        {isError && (
          <Heading textAlign='center'>Something went wrong...</Heading>
        )}

        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
