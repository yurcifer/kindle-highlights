export const searchQueryReducer = (state = '', action = null) => {
  switch (action.type) {
    case 'SEARCH':
      return action.query;
    default: return state;
  }
};
