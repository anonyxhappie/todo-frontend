import React from 'react'
import PropTypes from 'prop-types';

function EditableText({ editable, renderText, ...props } = {}) {   

    return (
        <React.Fragment>
            {(editable && <input {...props} />) || renderText(props.value) }
        </React.Fragment>
    )
}

EditableText.propTypes = {
    value: PropTypes.any,
    onChange: PropTypes.func,
    editable: PropTypes.bool,
    renderText: PropTypes.func
}

EditableText.defaultProps = {
    editable: false,
    renderText: text => text
}

export default EditableText;
