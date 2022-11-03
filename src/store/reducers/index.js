import { 
  combineReducers,
} from 'redux';
import themeReducerWITW from './themeReducer';

export const rootReducer = combineReducers({
  themeReducerWITW,
});

/* rename themeReducer, because it is used general
storage on GitHub and in this locale storage has already 
Reducer that have had same name */