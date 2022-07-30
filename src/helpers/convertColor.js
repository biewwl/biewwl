const convertColor = (color, isTheme = false) => {
  switch (color) {
    case '':
      return isTheme ? '#fff' : '#242424';
    case '-dark':
      return isTheme ? '#242424' : '#fff';
    case '-blue':
      return '#9599e2';
    case '-yellow':
      return '#fbab7e';
    case '-green':
      return '#36cda2';
    case '-purple':
      return '#8a51ec';
    case '-pink':
      return '#f7a49f';
    case '-red':
      return '#ea5455';
    case '-orange':
      return '#ff7a5f';
    default:
      return '#fff';
  }
}

export default convertColor;
