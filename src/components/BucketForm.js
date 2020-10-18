import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBucket } from '../actions/bucketActions';

export class BucketForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          copy_from: ''
        };
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
    
      onSubmit(e) {
        e.preventDefault();
        let bucket = {
            name: this.state.name
          };
  
        if(this.state.copy_from !== '') {
            bucket.copy_from = this.state.copy_from
        }
        this.props.createBucket(bucket)
        this.setState({
          name: '',
          copy_from: ''
        })
      }


      render() {
        const divStyle = {
            display: "flex",
            margin: "10px"
        };
        
        const bucketOptions = this.props.buckets.map(bucket => (
            <option key={bucket.uuid} value={bucket.uuid}>
                {bucket.name}
            </option>
        ));
        
        return (
          <div>
            <h1>Create New Bucket</h1>
            <form onSubmit={this.onSubmit} style={{display:'flex'}}>
              <div style={divStyle}>
                <label>Name: </label>
                <input
                  type="text"
                  name="name"
                  onChange={this.onChange}
                  value={this.state.name}
                  required
                />
              </div>
              <div style={divStyle}>
                <label>As: </label>
                <select name="copy_from" 
                  onChange={this.onChange}
                  value={this.state.copy_from}>
                  <option value="">Select</option>
                  {bucketOptions}
                </select>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        );
      }
}
    

BucketForm.propTypes = {
  createBucket: PropTypes.func.isRequired,
  buckets: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    buckets: state.buckets.items
});

export default connect(mapStateToProps, { createBucket })(BucketForm);
