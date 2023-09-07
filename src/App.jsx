import Loading from './Loading';
import { useEffect, useState } from 'react';
const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return 'test';
};
export default App;
