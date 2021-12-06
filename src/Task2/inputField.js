import React, { useState } from 'react';
import TextViewer from './textViewer'

function InputField() {
    const [data, setData] = useState('');
    
    function updateField(e) {
        setData(e.target.value)
    }
    return (
        <div>
            <input type='text' onChange={updateField} />
            <TextViewer newData={data} />
        </div>
    )
}

export default InputField;
