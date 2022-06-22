export const modalReducer = (state = false, action = null) => {
  switch (action.type) {
    case 'CLOSE':
      return false;
    case 'OPEN':
      return true;
    default: return state;
  }
};
