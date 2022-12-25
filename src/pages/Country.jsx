import {
  Container,
  CountryInfo,
  GoBackBtn,
  Heading,
  Loader,
  Section,
} from 'components';
import { useCountry } from 'hooks';

export const Country = () => {
  const { country, isLoading, isError, redirectToCurrentPath } = useCountry();
  const { flag, capital, countryName, languages = [], population } = country;

  return (
    <Section>
      <Container>
        <GoBackBtn path={redirectToCurrentPath}>Go back</GoBackBtn>

        {isLoading && <Loader />}

        {isError && (
          <Heading textAlign='center'>Something went wrong...</Heading>
        )}

        {country && (
          <CountryInfo
            flag={flag}
            capital={capital}
            country={countryName}
            languages={languages}
            population={population}
          />
        )}
      </Container>
    </Section>
  );
};
