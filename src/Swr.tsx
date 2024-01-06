import { Key } from 'react';
import useSWR from 'swr';

// Import useSWR from swr package

// created function to handle API request
const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());

const Swr = () => {
  const {
    data: countries,
    error,
    isValidating,
  } = useSWR('https://restcountries.com/v3.1/all', fetcher);

  // Handles error and loading state
  if (error) return <div className='failed'>failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  return (
    <div>
      {countries &&
        countries.map((country: { flags: { png: string | undefined; }; }, index: Key | null | undefined) => (
          <img key={index} src={country.flags.png} alt='flag' width={100} />
        ))}
    </div>
  );
};

export default Swr;