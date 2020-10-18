import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createTodoItem } from '../actions/todoItemActions';

export class TodoItemForm extends Component {
    constructor(props) {
        super(props);
        this.titleRef = React.createRef();
        this.bodyRef = React.createRef();
        this.onSubmit = this.onSubmit.bind(this);
      }
    
      onSubmit(e) {
        e.preventDefault();
        let todoItem = {
            bucket_uuid: this.props.location.pathname.split('/')[2],
            title: this.titleRef.current.value,
            body: this.bodyRef.current.value
          };
        this.props.createTodoItem(todoItem);
        this.clearForm();
      }

      clearForm() {
        this.titleRef.current.value = '';
        this.bodyRef.current.value = '';
      }


      render() {
        const divStyle = {
            display: "flex",
            margin: "2px"
        };
        
        return (
          <div>
            <div>
                <Link to={`/`}>
                    Back
                </Link>
            </div>
            <h1>Add Todo</h1>
            <form onSubmit={this.onSubmit} style={{display:'flex'}}>
              <div style={divStyle}>
                <label>Title: </label>
                <input
                  type="text"
                  name="title"
                  ref={this.titleRef} 
                  required
                />
              </div>
              <div style={divStyle}>
                <label>Body: </label>
                <textarea
                    name="body"
                    ref={this.bodyRef}
                    required
                    />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        );
    }
}
    

TodoItemForm.propTypes = {
  createTodoItem: PropTypes.func.isRequired,
  bucket: PropTypes.object,
};

export default connect(null, { createTodoItem })(TodoItemForm);
