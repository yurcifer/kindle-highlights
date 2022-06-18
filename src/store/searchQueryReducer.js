export const searchQueryReducer = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH': 
      return action.query;
    default: return state;
  }
}