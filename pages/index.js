import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addName, updateName, deleteTodo } from "../store/slices/userSlice";
import {useRouter} from "next/router";


const Home = () => {
    const getNameListArray = useSelector((state) => state.user.nameList);
    const [nameToAdd, setNameToAdd] = useState('');
    const dispatch = useDispatch();
    const router = useRouter()

    const updateGetNameArray = () => {
        dispatch(addName(nameToAdd));
        setNameToAdd('');
    }

    return (
        <div>
            <div style={{ border: '1px solid black', borderRadius: 20, margin: 300 }}>
                <div style={{ padding: 20}}>
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
                        &nbsp;
                        <button
                            style={{ border: '1px solid black', paddingRight: 5, paddingLeft: 5 }}
                            onClick={() => router.push('./index2')}
                        >Next
                        </button>
                    </div>
                    <div style={{ marginBottom: 5 }}>
                        {getNameListArray.length !== 0 ?
                            getNameListArray.map((n, index) => {
                                return (
                                    <h1>{index+1}. {n}</h1>
                                )
                            }) : <h1>No data</h1>
                        }
                    </div>
                </div>

                <hr/>
            </div>
        </div>
    );
}

export default Home;