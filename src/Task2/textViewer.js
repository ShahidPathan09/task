import React from 'react';

function TextViewer(props) {
    return (
        <div>
            <input type="text" value={props.newData} />
        </div>
    )
}

export default TextViewer;
