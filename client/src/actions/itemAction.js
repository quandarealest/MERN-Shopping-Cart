import axios from 'axios';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEM_LOADING } from './types';

export const getItems = () => dispatch => {
  dispatch(setItemLoading());
  axios
    .get('/api/items')
    .then(res => 
      dispatch({
        type: GET_ITEMS,
        payload: res.data,
      })
    )
}

export const addItem = (newItem) => dispatch => {
  axios
    .post('/api/items', newItem)
    .then(res => 
      dispatch({
        type: ADD_ITEMS,
        payload: res.data,
      }))

}

export const deleteItem = (id) => dispatch => {
  axios
    .delete(`/api/items/${id}`)
    .then(res => dispatch({
      type: DELETE_ITEMS,
      payload: id,
    }))
}

export const setItemLoading = () => {
  return {
    type: ITEM_LOADING,
  }
}