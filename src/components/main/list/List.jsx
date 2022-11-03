import React from 'react';
import { 
  Style,
} from './components';

const List = ({children}) => {
  return (
    <Style>
      {children}
    </Style>
  );
};

export default List;