import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTodoItems, updateTodoItem, deleteTodoItem } from '../actions/todoItemActions';
import TodoItem from './TodoItem';

export class TodoItems extends Component {
    
    componentDidMount() {
        const bucket_id = this.props.location.pathname.split('/')[2];
        this.props.fetchTodoItems(bucket_id);
    }

    render() {
        const todoItems = this.props.todoItems.map(
            (todoItem) => (
                <TodoItem
                    key={todoItem.uuid}
                    todoItem={todoItem}
                    onSave={
                        (todoItemId, title, body, is_completed) => this.props.updateTodoItem(todoItemId, { title, body, is_completed })
                    }
                    onDelete={
                        (todoItemId) => this.props.deleteTodoItem(todoItemId)
                    }
                />
        ))
        return (
            <div>
              <h1>Todo Items</h1>
              {todoItems}
            </div>
        )
    }
}

TodoItems.propTypes = {
    fetchTodoItems: PropTypes.func.isRequired,
    todoItems: PropTypes.array.isRequired
  };
  
  const mapStateToProps = state => ({
    todoItems: state.todoItems.items
  });
  
  export default connect(mapStateToProps, { fetchTodoItems, updateTodoItem, deleteTodoItem })(TodoItems);
  