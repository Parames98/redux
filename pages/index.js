import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from "next/router";


const UserList = () => {
    const getNameListArray = useSelector((state) => state.user.nameList);
    const router = useRouter()

    return (
        <div>
            <div style={{ border: '1px solid black', borderRadius: 20, margin: 200 }}>
                <div style={{ padding: 20}}>
                    <div>
                        List of Student
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
                    <div>
                        <button
                            style={{ border: '1px solid black', paddingRight: 5, paddingLeft: 5 }}
                            onClick={() => router.push('./addUser')}
                        >Add User
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserList;