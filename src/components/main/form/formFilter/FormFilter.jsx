import { useEffect } from 'react';
import {
  useState,
} from 'react';
import {FormStyle} from './components';
import SearchCountry from './SearchCountry';
import SelectRegion from './SelectRegion';

const FormFilter = ({onSearch}) => {

  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    const regionValue = region?.value || '';
    onSearch(search, regionValue);
  }, [search, region]);
  const regions = [
    {value: 'Africa', label: 'Africa'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Americas', label: 'Americas'},
    {value: 'Oceania', label: 'Oceania'},
  ];

  return (
    <FormStyle>
      <SearchCountry search={search} setSearch={setSearch}/>
      <SelectRegion 
        options={regions} 
        region={region} 
        setRegion={setRegion}
        placeholder="Filter by region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </FormStyle>
  );
};

export default FormFilter;