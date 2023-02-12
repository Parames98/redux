import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addName, updateName } from "../store/slices/userSlice";

const Home = () => {
    const getNameListArray = useSelector((state) => state.findName.nameList);
    const getName = useSelector((state) => state.findName.singleName);
    const [nameToAdd, setNameToAdd] = useState('');
    const [nameToUpdate, setNameToUpdate] = useState('');
    const dispatch = useDispatch();

    const updateGetNameArray = () => {
        dispatch(addName(nameToAdd));
        setNameToAdd('');
    }

    const updateSingleName = () => {
        dispatch(updateName(nameToUpdate));
        setNameToUpdate('');
    }

    return (
        <div>
            <div style={{ border: '1px solid black', borderRadius: 20, margin: 300 }}>
                <div style={{ padding: 20}}>
                    <div style={{ marginBottom: 5 }}>Name list:</div>
                    <div style={{ marginBottom: 5 }}>
                        {getNameListArray.length !== 0 ?
                            getNameListArray.map((n, index) => {
                                return (
                                    <h1>{index+1}. {n}</h1>
                                )
                            }) : <h1>None</h1>
                        }
                    </div>
                    <div style={{ marginBottom:5 }}>Add Name:</div>
                    <div>
                        <input
                            style={{ border: '1px solid black', marginRight: 5 }}
                            value={nameToAdd}
                            onChange={e => setNameToAdd(e.target.value)}/>
                        <button
                            style={{ border: '1px solid black', paddingRight: 5, paddingLeft: 5 }}
                            onClick={updateGetNameArray}
                        >Add
                        </button>
                    </div>
                </div>

                <hr/>

                <div style={{ padding: 20}}>
                    <div style={{ marginBottom: 5 }}>Current Name: {getName === '' ? 'No data' : getName}</div>
                    <div style={{ marginBottom: 5 }}>Update Name:</div>
                    <div>
                        <input
                            style={{ border: '1px solid black', marginRight: 5 }}
                            value={nameToUpdate}
                            onChange={e => setNameToUpdate(e.target.value)}/>
                        <button
                            style={{ border: '1px solid black', paddingRight: 5, paddingLeft: 5 }}
                            onClick={updateSingleName}
                        >Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;