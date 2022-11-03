import { 
  useState, lazy,
  Suspense,
} from 'react';
import Header from './components/header/Header';
import GlobalStyles from './styles/global';
import { 
  ThemeProvider,
} from 'styled-components';
import { 
  useSelector,
} from 'react-redux';
import Main from './components/main/main/Main';

const Routing = lazy( () => import('./pages/routing/Routing'));


function App() {

  const currentTheme = useSelector(state => state.themeReducerWITW.theme);
  const [countries, setCountries] = useState([]);

  return (
    <Suspense fallback = {<div>Loading...</div>}>
      <ThemeProvider theme={currentTheme}>
        <Header />
        <Main>
          <Routing countries={countries} setCountries={setCountries}/>
        </Main>
        <GlobalStyles />
      </ThemeProvider>
    </Suspense>
    
  );
}

export default App;
