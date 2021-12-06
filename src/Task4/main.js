import React, { useState } from 'react';

function Main4() {
    const [fname, setFname] = useState(null);
    const [lname, setLname] = useState(null);
    const [opt, setOpt] = useState('select')

    function submitData() {
        if (fname !== null && lname !== null && opt !== 'select') {
            let item = { fname, lname, opt }
            console.log(item)
        }
        else {
            alert('Fill all the fields!')
        }
    }
    return (
        <div>
            <input type='text' onChange={(e) => { setFname(e.target.value) }} /><br />
            <input type='text' onChange={(e) => { setLname(e.target.value) }} /><br />
            <select onChange={(e) => { setOpt(e.target.value) }}>
                <option value='select'>Select</option>
                <option value='user'>User</option>
                <option value='admin'>Admin</option>
                <option value='owner'>Owner</option>
            </select>
            <button type='submit' style={{ marginLeft: '12px' }} onClick={submitData}>Submit</button>
        </div>
    )
}

export default Main4;
