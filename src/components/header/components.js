import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../styles/propoptions';

export const HeaderStyle = styled.header` 
    background-color: ${({theme}) => theme.color.elements};
    width: 100%;
    margin-bottom: 20px;
    box-shadow: ${({theme}) => theme.shadow};
`;

export const HeaderTitle = styled.h1`
    display: block;
    user-select: none;
    font-size: calc(1.15rem + (1.15 - 1) * ((100vw - 767px) / (1920 - 767)));
`;

export const HeaderElement = styled.div`
    color: ${({theme}) => theme.color.text};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
`;
export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding: 1.5rem 1rem;
    @media ${device.laptopL} {
        max-width: 1240px;
        padding: 1.5rem 0rem;
    }
`;

export const HeaderLink = styled(Link)`
    text-decoration: none;
    color: ${({theme}) => theme.color.text};
`;