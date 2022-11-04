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
import Loader from './auxiliaries/Loader/Loader';
import ErrorBoundary from './auxiliaries/ErrorBoundary/ErrorBoundary';

const Routing = lazy( () => import('./pages/routing/Routing'));


function App() {

  const currentTheme = useSelector(state => state.themeReducerWITW.theme);
  const [countries, setCountries] = useState([]);

  return (
    <ErrorBoundary>
      <Suspense fallback = {<Loader />}>
        <ThemeProvider theme={currentTheme}>
          <Header />
          <Main>
            <Routing countries={countries} setCountries={setCountries}/>
          </Main>
          <GlobalStyles />
        </ThemeProvider>
      </Suspense>
    </ErrorBoundary>    
  );
}

export default App;
