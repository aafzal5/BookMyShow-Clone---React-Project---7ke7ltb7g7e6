import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

// export default useFetch;

// import useFetch from './useFetch';

// const MyComponent = () => {
//   const { data, isLoading, error } = useFetch('https://api.example.com/data');

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
