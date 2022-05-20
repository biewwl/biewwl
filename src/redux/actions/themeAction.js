function changeColor(color) {
  return {
    type: 'CHANGE_COLOR',
    payload: color,
  }
}

function changeTheme(theme) {
  return {
    type: 'CHANGE_THEME',
    payload: theme,
  }
}

export  { changeColor, changeTheme };
