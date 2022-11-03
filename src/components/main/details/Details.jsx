import axios from 'axios';
import {
  useState, useEffect,
} from 'react';
import { 
  useNavigate,
} from 'react-router-dom';
import { filterByCode } from '../../../constants';
import { 
  Tag, TagGroup, 
  Meta, Button, 
  DetailsImg, DetailsInfo, 
  DetailsStyle, DetailsTitle, 
  List, ListGroup, 
  ListItem } from './components';

const Details = (props) => {
  const name = props.name.official;
  const flags = props.flags.svg;
  const region = props.region;
  const subregion = props.subregion;
  const population = props.population;
  const capital = props.capital;
  const tld = props.tld;
  const currencies = Object.values(props.currencies) || [];
  const languages = Object.values(props.languages) || [];
  const nativeName = Object.values(props.name.nativeName).pop().official || '';
  const borders = props.borders || [];
  const [neighbours, setNeighbours] = useState([]);

  useEffect(()=>{
    if(borders.length){
      axios
        .get(filterByCode(borders))
        .then(({ data }) => 
          setNeighbours(
            data.map(el => 
            {
              return { 
                id: el.cca3, 
                name: el.name.common, 
              };
            }
            )));
    }
  }, [borders]);

  const navigate = useNavigate();

  const navigateHandler = (id) => {
    navigate(`/whereistheworld/country/${id}`);
  };

  return (
    <>
      <Button onClick={() => navigate(-1)}>Back</Button>
      <DetailsStyle>
        <DetailsImg src={flags} alt={name}/>
        <DetailsInfo>
          <DetailsTitle>
            {name}
          </DetailsTitle>
          <ListGroup>
            <List>
              <ListItem>
                <b>Native Name: </b>{nativeName}
              </ListItem>
              <ListItem>
                <b>Population: </b>{population}
              </ListItem>
              <ListItem>
                <b>Region: </b>{region}
              </ListItem>
              <ListItem>
                <b>Sub Region: </b>{subregion}
              </ListItem>
              <ListItem>
                <b>Capital: </b>{capital}
              </ListItem>
            </List>
            <List>
              <ListItem>
                <b>Top Level Domain: </b>{tld}
              </ListItem>
              <ListItem>
                <b>Currencies: </b>{
                  currencies.map((el) => 
                    <span key={el.name}>{el.name}</span>)
                }
              </ListItem> 
              <ListItem>
                <b>Languages: </b>{
                  languages.map((el) => 
                    <span key={el}>{el} </span>)
                }
              </ListItem> 
            </List>
          </ListGroup>
          <Meta>
            <b>Border Countries: </b>
            {
              !borders.length  
                ?(
                  <span>There is no border countries</span>
                )
                :(
                  <TagGroup>
                    {
                      neighbours.map(el =>
                        <Tag 
                          onClick={() => navigateHandler(el.id)} 
                          key={el.id}
                        >
                          {el.name}
                        </Tag>                      
                      )
                    }
                  </TagGroup>
                )

            }
          </Meta>
        </DetailsInfo>
      </DetailsStyle>
    </>
  );
};

export default Details;