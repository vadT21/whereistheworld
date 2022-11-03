import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { searchByCountry } from '../constants/links';
import Details from '../components/main/details/Details';

const CountryPage = () => {

  const {name} = useParams();
  const [country, setCountry] = useState(null);
  useEffect(() => {
    axios
      .get(searchByCountry(name))
      .then(({data}) => setCountry(data[0]));
  }, [name]);

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