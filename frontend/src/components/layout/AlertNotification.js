import React from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { connect } from 'react-redux';
import { getActions } from '../../redux/actions/alertActions';

const AlertNotification = ({
    alertMessagePopup,
    hideAlertMessage,
    alertMessage,
}) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={alertMessagePopup}
            onClose={hideAlertMessage}
            autoHideDuration={6000}
        >
            <Alert severity="info">{alertMessage}</Alert>
        </Snackbar>
    )
}

const mapStoreStateToProps = ({ alert }) => {
    return {
        ...alert,
    };
};

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(AlertNotification);