import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBuckets, renameBucket, deleteBucket } from '../actions/bucketActions';
import Bucket from './Bucket';

export class Buckets extends Component {

    componentDidMount() {
        this.props.fetchBuckets();
    }

    render() {
        const bucketItems = this.props.buckets.map(
            (bucket) => (
                <Bucket
                    key={bucket.uuid}
                    bucket={bucket}
                    onSave={
                        (bucketId, name) => this.props.renameBucket(bucketId, { name })
                    }
                    onDelete={
                        (bucketId) => this.props.deleteBucket(bucketId)
                    }
                />
        ))
        return (
            <div>
              <h1>Buckets</h1>
              {bucketItems}
            </div>
        )
    }
}


Buckets.propTypes = {
    fetchBuckets: PropTypes.func.isRequired,
    buckets: PropTypes.array.isRequired
  };
  
  const mapStateToProps = state => ({
    buckets: state.buckets.items
  });
  
  export default connect(mapStateToProps, { fetchBuckets, renameBucket, deleteBucket })(Buckets);
  