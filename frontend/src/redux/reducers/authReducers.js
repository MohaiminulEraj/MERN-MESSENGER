const initalState = {
    userDetails: null,
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case "DUMMY":
            return {
                ...state,
            };
        default:
            return state;
    }
}

export default reducer;