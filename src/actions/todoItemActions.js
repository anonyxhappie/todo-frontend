import { SET_ITEMS } from './types';
import { TodoItemsService } from '../services/TodoItems.service'

export const fetchTodoItems = (bucket_id) => async dispatch => {
  const { status, message, result } = await TodoItemsService.use()
  .withPath('bucket')
  .getOne(bucket_id)
  if (status === 200)
    dispatch({
      type: `todo-items/${SET_ITEMS}`,
      payload: result
    })
  else
    alert(message)
};

export const createTodoItem = body => async (dispatch, getState) => {
  const { status, message, result } = await TodoItemsService.use()
    .create(body)
  if (status === 201) 
    dispatch({
      type: `todo-items/${SET_ITEMS}`,
      payload: [result, ...getState().todoItems.items]
    })
  else
    alert(message)
};

export const updateTodoItem = (todoItem_id, body) => async (dispatch, getState) => {
  const { status, message } = await TodoItemsService.use()
      .updateOne(todoItem_id, body)
  if (status !== 204)
    dispatch({
      type: `todo-items/${SET_ITEMS}`,
      payload: getState().todoItems.items
    })
    alert(message) 
};

export const deleteTodoItem = (todoItem_id) => async (dispatch, getState) => {
  const { status, message } = await TodoItemsService.use()
      .deleteOne(todoItem_id)
    if (status === 204) {
      const todoItems = [...getState().todoItems.items]
      const idx = todoItems.findIndex(({uuid}) => uuid === todoItem_id)
      todoItems.splice(idx, 1)
  
      dispatch({
        type: `todo-items/${SET_ITEMS}`,
        payload: todoItems
      })
    }
    else
      alert(message)
};
