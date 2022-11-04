import {
  useState, useEffect,
} from 'react';
import { 
  useParams,
} from 'react-router-dom';
import axios from 'axios';
import { searchByCountry } from '../constants/links';
import Details from '../components/main/details/Details';

const CountryPage = () => {

  const {id} = useParams();
  const [country, setCountry] = useState(null);
  useEffect(() => {
    axios
      .get(searchByCountry(id))
      .then(({data}) => setCountry(data[0]));
  }, [id]);

  return (
    <>
      {
        country && 
      <Details {...country}/>
      }
    </>
  );
};

export default CountryPage;