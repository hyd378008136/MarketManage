const DemoReducer = (state = {
  value_0: {value: '111'}
}, action) => {
  switch (action.type) {
    case 'updateDemo':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
export default DemoReducer;
