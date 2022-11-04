import styled from 'styled-components';
import {
  device,
} from '../../../styles/propoptions';

export const Style = styled.section` 
    width: 100%;
    padding: 2rem 3rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    
    @media ${device.mobile}{
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        padding: 1.5rem 1rem;
    }
    @media ${device.tablet}{
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
        padding: 2rem 3rem;
    }
    @media ${device.laptopS}{
        grid-template-columns: repeat(3, 1fr);
        gap: 3rem;    
        padding: 2rem 1rem;
    }
    @media ${device.laptopL}{
        grid-template-columns: repeat(4, 1fr);
        gap: 3rem;    
        padding: 2rem 0rem;
    }
`;
