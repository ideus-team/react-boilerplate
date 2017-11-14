import {
  GET_EXAMPLE_REQUEST,
  GET_EXAMPLE_SUCCESS,
} from '../constants/actionTypes';

const initialState = {
  example: {},
};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXAMPLE_REQUEST: {
      return {
        ...state,
      };
    }
    case GET_EXAMPLE_SUCCESS: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default exampleReducer;
