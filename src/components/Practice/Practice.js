import React, { useEffect, useState } from 'react'

const origin_state = {
    "id": "001",
    "type": "A",
    "value": "aaaaa",
    "data:": {},
    "path": ["001"],
    "children": [
        {
            "id": "003",
            "type": "A",
            "value": "aaaaa",
            "data:": {},
            "path": ["001", "003"],
            "children": [
                {
                    "id": "002",
                    "type": "A",
                    "value": "aaaaa",
                    "data:": {},
                    "path": ["001", "003", "002"],
                    "children": []
                },
            ]
        },
        {
            "id": "004",
            "type": "A",
            "value": "aaaaa",
            "data:": {},
            "path": ["001", "004"],
            "children": [
                {
                    "id": "005",
                    "type": "A",
                    "value": "aaaaa",
                    "data:": {},
                    "path": ["001", "004", "005"],
                    "children": []
                },{
                    "id": "005",
                    "type": "A",
                    "value": "aaaaa",
                    "data:": {},
                    "path": ["001", "004", "005"],
                    "children": [
                        {
                            "id": "002",
                            "type": "A",
                            "value": "aaaaa",
                            "data:": {},
                            "path": ["001", "004", "005", "002"],
                            "children": []
                        }
                    ]
                }
            ]
        }
    ]
};

const deepCopy = (obj) => {
    if (typeof obj !== 'object' || obj === null){
        return obj;
    }
    let copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        copy[key] = deepCopy(obj[key]);
    }

    return copy
};

export const Practice = () => {
    const [state, setState] = useState(origin_state);

    const handelClick = () => {
        const newState = deepCopy(state);
        newState.children[0].children[0].path[1] = '004';
        newState.children[1].children[1].children[0].path[2] = '006';
        setState(newState);
    };

    return (
        <div>
            <p>origin_state.children[0].children[0].path[1]: {origin_state.children[0].children[0].path[1]}</p>
            <p>origin_state.children[1].children[1].children[0].path[2]: {origin_state.children[1].children[1].children[0].path[2]}</p>
            <p>==================================</p>
            <p>state.children[0].children[0].path[1]: {state.children[0].children[0].path[1]}</p>
            <p>state.children[1].children[1].children[0].path[2]: {state.children[1].children[1].children[0].path[2]}</p>
            <button type="" onClick={handelClick}>Update State Immutably</button>
        </div>
    );
};