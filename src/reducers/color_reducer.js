const initialState = {
    red: 250,
    green: 250,
    blue: 250,
};

const colorReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case 'INCREMENT':
            newState[action.color] += 1;
            return newState;
        case 'DECREMENT':
            newState[action.color] -= 1;
            return newState;
        default:
            return newState;
    };
};

export default colorReducer;