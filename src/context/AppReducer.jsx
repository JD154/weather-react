export default (state, action) => {
  switch (action.type) {
    case 'ADD_LOCATION':
      return {
        ...state,
        searchLocation: action.payload,
      };
    default:
      return state;
  }
};
