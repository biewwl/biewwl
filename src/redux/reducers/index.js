import { combineReducers } from 'redux';
import theme from './themeReducer';

const reducer = combineReducers({
  theme,
});

export default reducer;
