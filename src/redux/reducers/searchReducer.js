const INITIAL_STATE = {
  query: '',
};

const SET_QUERY = 'SET_QUERY';

function search(prevState = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_QUERY:
      return {
        ...prevState,
        query: action.payload,
      };
    default:
      return prevState;
  }
};

export default search;
