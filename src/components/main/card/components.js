import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardLink = styled(Link)`
    text-decoration: none;
    color: ${({theme}) => theme.color.text};
`;

export const CardStyle = styled.article` 
    cursor: pointer;
    overflow: hidden;
    background-color: ${({theme}) => theme.color.elements};
    border-radius: ${({theme}) => theme.borderRadius};
    box-shadow: ${({theme}) => theme.shadow};
`;

export const CardImg = styled.img`
    display: block;
    width: 100%;
    height: 175px;
    object-fit: cover;
    object-position: center;
    box-shadow: ${({theme}) => theme.shadow};
`;
export const CardBody = styled.div`
    padding: 1rem 1.5rem 2rem;
`;

export const CardTitle = styled.h3`
    margin: 0;
    font-size: 1rem;
`;


export const CardList = styled.ul`
    list-style: none;
    padding: 1rem 0 0 0;
    & > b {
        font-weight: 800;
    }
`;

export const CardListItem = styled.li`
    padding-bottom: 3px;
    font-size: 0.75rem;
    & > b {
        font-weight: 600;
    }
`;