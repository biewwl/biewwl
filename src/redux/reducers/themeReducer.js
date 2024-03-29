import lS from 'manager-local-storage';

const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

const INITIAL_STATE = {
  color: '-blue',
  theme: prefersColorScheme.matches ? '-dark' : '',
};

const initialState = lS('g', 'biewwl_theme') ?? INITIAL_STATE;

const CHANGE_COLOR = 'CHANGE_COLOR';
const CHANGE_THEME = 'CHANGE_THEME';

const changeTheme = (theme, color) => {
  const newTheme = {
    theme,
    color,
  }
  lS('s', 'biewwl_theme', newTheme);
  return newTheme;
};

function theme(prevState = initialState, action) {
  switch (action.type) {
    case CHANGE_COLOR:
      return {
        ...prevState,
        ...changeTheme(prevState.theme, action.payload),
      };
    case CHANGE_THEME:
      return {
        ...prevState,
        ...changeTheme(action.payload, prevState.color),
      };
    default:
      return prevState;
  }
};

export default theme;
