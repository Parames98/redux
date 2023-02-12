import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addName } from "../store/slices/userSlice";

const Home = () => {
    const getName = useSelector((state) => state.findName.getName);
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const updateGetName = () => {
        dispatch(addName(name));
        setName('');
    }

    return (
        <div>Name list:
            {getName.length !== 0 ?
                getName.map((n, index) => {
                    return (
                        <h1>{index+1}. {n}</h1>
                    )
                }) : <h1>None</h1>
            }
            <label>Add Name:</label>
            <input
                style={{ border: '1px solid black' , marginLeft: 5 }}
                value={name}
                onChange={e => setName(e.target.value)}/>
            <button
                style={{ border: '1px solid black', paddingRight: 5, paddingLeft: 5, marginLeft: 5 }}
                onClick={updateGetName}
            >Save Name
            </button>
        </div>
    );
}

export default Home;