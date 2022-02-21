const alertActions = {
    SHOW_ALERT_MESSAGE: 'ALERT.SHOW_ALERT_MESSAGE',
    HIDE_ALERT_MESSAGE: 'ALERT.HIDE_ALERT_MESSAGE',
}

export const getActions = (dispatch) => {
    return {
        showAlertMessage: (message) => dispatch(showAlertMessage(message)),
        hideAlertMessage: () => dispatch(hideAlertMessage()),
    };
};

export const showAlertMessage = (message) => {
    return {
        type: alertActions.SHOW_ALERT_MESSAGE,
        message,
    };
};

export const hideAlertMessage = () => {
    return {
        type: alertActions.HIDE_ALERT_MESSAGE,
    };
};

export default alertActions;