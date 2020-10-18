import React, { useState, useCallback } from 'react';
import EditableText from './EditableText'

const TodoItem = ({ todoItem, onSave, onDelete } = {}) => {
    const [editable, setEditable] = useState(false)
    const [title, setTitle] = useState(todoItem.title)
    const [body, setBody] = useState(todoItem.body)
    const [status, setStatus] = useState(todoItem.is_completed)

    const renderText = useCallback((text) => (
        <p style={{padding:'0px 5px'}}>{text}</p>
    ), [])

    const onChangeTitle = useCallback((e) => {
        setTitle(e.target.value)
    }, [])

    const onChangeBody = useCallback((e) => {
        setBody(e.target.value)
    }, [])

    const onChangeStatus = useCallback((e) => {
        setStatus(e.target.checked)
    }, [])

    const handleEdit = useCallback(() => {
        if (editable) {
            onSave(todoItem.uuid, title, body, status)
        }
        setEditable(!editable)
    }, [todoItem.uuid, title, body, status, editable, onSave])

    return (
        <div key={todoItem.uuid} style={{display:'flex', alignItems: 'center', borderBottom: '1px solid lightgray'}}>
            <input type="checkbox" checked={status} disabled={!editable} onChange={onChangeStatus}/> 
            <EditableText
                value={title}
                editable={editable}
                renderText={renderText}
                onChange={onChangeTitle}
            />
            <EditableText
                value={body}
                editable={editable}
                renderText={renderText}
                onChange={onChangeBody}
            /> 

            <button onClick={handleEdit}>
                { editable ? 'Save' : 'Edit' }
            </button>
            <button onClick={() => onDelete(todoItem.uuid)}>
                Delete
            </button>
        </div>
    )
};

export default TodoItem;