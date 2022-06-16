// it may need additional action type when highlights supposed to be update (after connect storage to manage likes, and so on)
export const inputFileReducer = (state = {highlights: []}, action) => {
  switch (action.type) {
    case 'INIT': 
      return {highlights: [...action.data]};
    default: return {state};
  }
}