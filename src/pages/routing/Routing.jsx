import React from 'react';
import { 
  Routes, 
  Route,
} from 'react-router-dom';
import CountryPage from '../CountryPage';
import HomePage from '../HomePage';
import NotFoundPage from '../NotFoundPage';


const Routing = ({countries, setCountries}) => {
  return (
    <Routes>
      <Route 
        index 
        path="/whereistheworld"
        element={<HomePage countries={countries} setCountries={setCountries}/>}
      />
      <Route 
        path="/whereistheworld/country/:id"
        element={<CountryPage />}
      />
      <Route 
        path="*" 
        element={<NotFoundPage />}
      />
    </Routes>
  );
};

export default Routing;