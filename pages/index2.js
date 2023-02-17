import React from 'react';
import {useSelector} from "react-redux";

const Index = () => {
    const getNameListArray = useSelector((state) => state.user.nameList);

    return (
        <div>
            <div style={{ marginBottom: 5 }}>Name List:</div>
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
    );
};

export default Index;
