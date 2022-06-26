import { combineReducers } from 'redux';
import theme from './themeReducer';
import search from './searchReducer';

const reducer = combineReducers({
  theme,
  search,
});

export default reducer;
