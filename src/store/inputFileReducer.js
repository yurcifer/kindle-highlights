export const inputFileReducer = (state = {highlights: []}, action) => {
  switch (action.type) {
    case 'INIT': 
      return {highlights: [...action.data]};
    default: return {state};
  }
}