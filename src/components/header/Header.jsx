import React from 'react';
import { 
  HeaderStyle, 
  HeaderTitle, 
  HeaderElement, 
  HeaderContainer,
  HeaderLink,
} from './components';
import { 
  useDispatch, 
  useSelector,
} from 'react-redux';
import { 
  darkTheme, 
  lightTheme,
} from '../../styles/theme';
import { 
  changeTheme,
} from '../../store/actions/themeActions';


const Header = () => {

  const dispatch = useDispatch();
  const defaultTheme = useSelector(state => state.themeReducerWITW.theme.title);

  const changeThemeHandler = () => {
    const theme = defaultTheme === 'light' 
      ? darkTheme 
      : lightTheme;
    dispatch(changeTheme(theme));
  };

  return (
    <HeaderStyle>
      <HeaderContainer>
        <HeaderLink to="/whereistheworld">
          <HeaderTitle>
            Where is the world?
          </HeaderTitle>
        </HeaderLink>
        <HeaderElement onClick = {changeThemeHandler}>
          {
            defaultTheme
          }
        </HeaderElement>
      </HeaderContainer> 
    </HeaderStyle>
  );
};

export default Header;