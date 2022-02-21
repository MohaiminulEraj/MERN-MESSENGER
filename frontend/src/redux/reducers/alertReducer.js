import alertActions from '../actions/alertActions';

const initalState = {
    alertMessagePopup: false,
    alertMessage: null,
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case alertActions.SHOW_ALERT_MESSAGE:
            return {
                ...state,
                alertMessagePopup: true,
                alertMessage: action.message,
            };

        case alertActions.HIDE_ALERT_MESSAGE:
            return {
                ...state,
                alertMessagePopup: false,
                alertMessage: null,
            };

        default:
            return state;

    }
};

export default reducer;