import { 
  THEME_ACTIONS,
} from '../../constants';

export function changeTheme(value){
  return {
    type: THEME_ACTIONS.CHANGE_THEME,
    payload: value,
  };
}