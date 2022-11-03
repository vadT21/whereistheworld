import styled from 'styled-components';
import { device } from '../../../styles/propoptions';

export const MainStyle = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media ${device.laptopL}{
        max-width: 1240px;
        margin: 0 auto;
    }
`;