import {useState, useEffect} from 'react'
import {BASE_URL} from '../settings/base'

const useGetEscort = (id) => {
  const [escort, setEscort] = useState({})

  useEffect(() => {
    if (id) {
      const getData = async () => {
        const url = `${BASE_URL}/escorts/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setEscort(data);
      };
      getData();
    }
  }, [id]);

  return escort
}

export default useGetEscort