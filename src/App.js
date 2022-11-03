import { 
  useState,
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
import Routing from './pages/routing/Routing';


function App() {

  const currentTheme = useSelector(state => state.themeReducer.theme);
  const [countries, setCountries] = useState([]);

  return (
    <ThemeProvider theme={currentTheme}>
      <Header />
      <Main>
        <Routing countries={countries} setCountries={setCountries}/>
      </Main>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
