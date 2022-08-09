import { combineReducers } from 'redux';
import theme from './themeReducer';
import search from './searchReducer';
import language from './languageReducer';

const reducer = combineReducers({
  theme,
  search,
  language,
});

export default reducer;
