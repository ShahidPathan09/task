import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Assign1 from './assigment1';
import Assign2 from './assignment2';

function Main3() {
    return (
        <div>
            <BrowserRouter>
                <Link to='/assignment1'>Assign1</Link>
                <br />
                <Link to='/assignment2'>Assign2</Link>
                <Routes>
                    <Route path='/assignment1' element={<Assign1 />} />
                    <Route path='/assignment2' element={<Assign2 />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Main3;
