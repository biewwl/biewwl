const languageAction = (payload) => {
  return {
    type: 'CHANGE_LANGUAGE',
    payload,
  };
};

export default languageAction;
