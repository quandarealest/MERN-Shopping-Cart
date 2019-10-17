import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEM_LOADING } from '../actions/types';
const initialState = {
  items: [],
  loading: false,
}

export default function(state = initialState, action) {
  switch(action.type){
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
      case ADD_ITEMS:
        return {
          ...state,
          items: [action.payload, ...state.items]
        };
    case DELETE_ITEMS:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      };
    case ITEM_LOADING:
      return {
        ...state,
        loading: true,
      }
  default:
    return state;
  }
}
