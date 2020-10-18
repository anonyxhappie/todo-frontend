import { SET_ITEMS } from './types';
import { BucketsService } from '../services/Buckets.service'

export const fetchBuckets = () => async dispatch => {
  const { status, message, result } = await BucketsService.use().getMany()
  if (status === 200) 
    dispatch({
      type: `buckets/${SET_ITEMS}`,
      payload: result
    })
  else
    alert(message)
};

export const createBucket = body => async (dispatch, getState) => {
  const { status, message, result } = await BucketsService.use()
    .create(body)
  if (status === 201)
    dispatch({
      type: `buckets/${SET_ITEMS}`,
      payload: [result, ...getState().buckets.items]
    })
  else
    alert(message)
};

export const renameBucket = (bucket_id, body) => async (dispatch, getState) => {
  const { status, message } = await BucketsService.use()
      .withPath('bucket')
      .updateOne(bucket_id, body)
  if (status !== 204)  {
    dispatch({
      type: `buckets/${SET_ITEMS}`,
      payload: getState().buckets.items
    })
    alert(message)
  }

}

export const deleteBucket = (bucket_id) => async (dispatch, getState) => {
    const { status, message } = await BucketsService.use()
      .withPath('bucket')
      .deleteOne(bucket_id)
    if (status === 204) {
      const buckets = [...getState().buckets.items]
      const idx = buckets.findIndex(({uuid}) => uuid === bucket_id)
      buckets.splice(idx, 1)
  
      dispatch({
        type: `buckets/${SET_ITEMS}`,
        payload: buckets
      })
    }
    else
      alert(message)   

};
