import React from 'react';
import {
  MainStyle,
} from './components';

const Main = ({children}) => {
  return (
    <MainStyle>
      {children}
    </MainStyle>
  );
};

export default Main;