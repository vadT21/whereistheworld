import styled from 'styled-components';
import Select from 'react-select';
import { device } from '../../../../styles/propoptions';



export const FormStyle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 1rem;

    @media ${device.tablet} {
        flex-direction: row;
        justify-content: space-between;
        align-items: centers;  
    }
    @media ${device.laptopL}{
        max-width: 1240px;
        padding: 2rem 0rem;
    }
`;


export const  SearchStyle = styled.label`
    background-color: ${({theme}) => theme.color.elements};
    border-radius: ${({theme}) => theme.borderRadius};
    padding: 1rem;
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
    height: 42px;
    box-shadow: ${({theme}) => theme.shadow};
    @media (min-width: 767px) {
        width: 250px;
        margin-bottom: 0;
    }
`;

export const SearchInput = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  width: 100%;
  margin-left: 1rem;
  font-size: 14px;
  border: none;
  outline: none;
  background-color: ${({theme}) => theme.color.elements};
  color: ${({theme}) => theme.color.text};
  ::placeholder {
    color: ${({theme}) => theme.color.text};
  }
`;


export const SelectStyle = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      border: 'none',
      height: '40px',
      paddingLeft: '20px',
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
    }),
  },
})`
  cursor: pointer;
  
  width: 200px;
  font-size: 14px;
  border: none;
  outline: none;
  padding: 1px;
  border-radius: ${({theme}) => theme.borderRadius};
  font-family: ${({theme}) => theme.fontFamily};  
  box-shadow: ${({theme}) => theme.shadow};
  & * {
    background-color: ${({theme}) => theme.color.elements} !important;
    color: ${({theme}) => theme.color.text} !important;
  }
  
`;

