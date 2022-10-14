export const changeColor = (color) => {
  const payload = color === "" ? "" : `-${color}`;
  console.log(color);
  return {
    type: "CHANGE_COLOR",
    payload,
  };
};

export const changeTheme = (theme) => {
  const payload = theme === "" ? "" : `-${theme}`;
  return {
    type: "CHANGE_THEME",
    payload,
  };
};
