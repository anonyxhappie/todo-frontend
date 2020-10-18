import { combineReducers } from 'redux';
import bucketReducer from './bucketReducer';
import todoItemReducer from './todoItemReducer';

export default combineReducers({
  buckets: bucketReducer,
  todoItems: todoItemReducer
});
