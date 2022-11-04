import {
  useTransition,
} from 'react';
import { 
  SearchInput, SearchStyle,
} from './components';

const SearchCountry = ({search, setSearch}) => {

  const [isPending, startTransition] = useTransition();

  const changeHandler = (event) => {
    startTransition(() => {
      setSearch(event.target.value);
    });
  };

  return (
    <SearchStyle>
      <SearchInput onChange={changeHandler} value={search}/>
    </SearchStyle>
  );
};

export default SearchCountry;