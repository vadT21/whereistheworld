import styled from 'styled-components';
import {
  device,
} from '../../../styles/propoptions';

export const Button = styled.button`
    margin-left: 1rem;
    width: 100px;
    padding: 0.25rem;
    border-radius: ${({theme}) => theme.borderRadius};
    box-shadow: ${({theme}) => theme.shadow};
    background-color: ${({theme}) => theme.color.elements};
    color: ${({theme}) => theme.color.text};
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`;
export const DetailsStyle = styled.section`
  padding: 1.25rem;
  margin-top: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;
  color: ${({theme}) => theme.color.text};
  @media ${device.tablet}{
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @media ${device.laptopS}{
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

export const DetailsImg = styled.img`
display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: ${({theme}) => theme.shadow};

`;
export const DetailsInfo = styled.div`
`;
export const DetailsTitle = styled.h1`
    margin: 0;
    font-size: 1.75rem;
    padding: 1rem 0;
`;

export const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media ${device.laptopS}{
    flex-direction: row;
    gap: 4rem;
  }
`;

export const List = styled.ul`
list-style: none;
  margin: 0;
  padding: 0;
`;
export const ListItem = styled.li`
line-height: 1.8;

`;

export const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  @media ${device.tablet} {
    flex-direction: row;
    align-items: center;
  }
`;

export const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  
`;
export const Tag = styled.span`
  padding: 0 1rem;
  line-height: 1.5;
  cursor: pointer;
  font-size: calc(0.75rem + (1 - 0.75) * ((100vw - 767px) / (1920 - 767)));
  background-color: ${({theme}) => theme.color.elements};
  color: ${({theme}) => theme.color.text};  
  box-shadow: ${({theme}) => theme.shadow};
  border-radius: ${({theme}) => theme.borderRadius};
`;

