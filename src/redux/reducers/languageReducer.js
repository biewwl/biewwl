import lS from "manager-local-storage";
const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

const initialState = {
  language: lS('g', 'biewwl-language') || 'en',
};

export default function language(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      lS('s', 'biewwl-language', action.payload);
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
}
