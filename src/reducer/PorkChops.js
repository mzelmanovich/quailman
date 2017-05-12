const PorkChops = (state = [], action) => {
  switch (action.type){
  case SET_GENRES:
    state = action.data;
    break;
  default:
    state = [];
  }
  return state;
};

export default genres;
