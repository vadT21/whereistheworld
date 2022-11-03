import React from 'react';
import { 
  CardStyle,
  CardImg,
  CardBody,
  CardTitle,
  CardList,
  CardListItem,
  CardLink,
} from './components';

const Card = ({id, img, name, info = []}) => {
  return (
    <CardLink to={`country/${id}`}>
      <CardStyle>
        <CardImg src={img} alt={name}/>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardList>
            {
              info.map(el => {
                return <CardListItem key = {el.title}>
                  <b>{el.title}:</b> {el.description}
                </CardListItem>;
              })
            }
          </CardList>
        </CardBody>
      </CardStyle>
    </CardLink>
    
  );
};

export default Card;