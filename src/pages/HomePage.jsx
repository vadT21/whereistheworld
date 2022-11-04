import React from 'react';
import { 
  useState, useEffect,
} from 'react';
import axios from 'axios';
import Card from '../components/main/card/Card';
import List from '../components/main/list/List';
import FormFilter from '../components/main/form/formFilter/FormFilter';
import { 
  ALL_COUNTRIES,
} from '../constants';
import styled from 'styled-components';

const Span = styled.span`
  text-align: center;
  margin-top: 5rem;
  color: ${({theme}) => theme.color.text};
`;

const HomePage = ({countries, setCountries}) => { 

  const [filteredCountries, setFilteredCountries] = useState(countries);

  const searchAndFilterHandler = (search, filter) => {
    let data = [...countries];

    if(filter) {
      data = data.filter( el => 
        el.region.includes(filter)
      );
    }

    if(search) {
      data = data.filter( el => 
        el.name.common.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredCountries(data);
  };

  useEffect(() => {
    if(!countries.length){
      axios.get(ALL_COUNTRIES).then(({data}) => setCountries(data));
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    searchAndFilterHandler();
    // eslint-disable-next-line
  }, [countries])


  return (
    <>
      <FormFilter onSearch ={searchAndFilterHandler}/>
      {
        filteredCountries.length
          ?
          <List>
            {
              filteredCountries.map(el => {
                const countryInfo = {
                  id: el.cca3,
                  img: el.flags.svg,
                  name: el.name.common,
                  info:[
                    {
                      title: 'Population',
                      description: el.population.toLocaleString(),
                    },
                    {
                      title: 'Region',
                      description: el.region.toLocaleString(),
                    },
                    {
                      title: 'Capital',
                      description: el.capital.join().toLocaleString(),
                    },
                  ],
                };
                return <Card key={el.name.official} {...countryInfo}/>;
              })
          
            }
          </List> 
          :
          <Span> There are no eligible countries </Span>
      }
    </>
  );
};

export default HomePage;