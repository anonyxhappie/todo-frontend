import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import EditableText from './EditableText'
// service
import {  } from '../services/Buckets.service'

const Bucket = ({ bucket, onSave, onDelete } = {}) => {
    const [editable, setEditable] = useState(false)
    const [value, setValue] = useState(bucket.name)

    const renderText = useCallback((text) => (
        <Link to={`bucket/${bucket.uuid}/`}>
            {text}
        </Link>
    ), [bucket.uuid])

    const onChange = useCallback((e) => {
        setValue(e.target.value)
    }, [])

    const handleEdit = useCallback(() => {
        if (editable) {
            onSave(bucket.uuid, value)
        }
        setEditable(!editable)
    }, [bucket.uuid, value, editable, onSave])

    return (
        <div key={bucket.uuid} style={{display: 'flex', alignItems: 'center'}}>
            <EditableText
                value={value}
                editable={editable}
                renderText={renderText}
                onChange={onChange}
            />
            <button onClick={handleEdit} style={{margin: '0px 5px'}}>
                { editable ? 'Save' : 'Edit' }
            </button>
            <button onClick={() => onDelete(bucket.uuid)}>
                Delete
            </button>
        </div>
    )
};

export default Bucket;