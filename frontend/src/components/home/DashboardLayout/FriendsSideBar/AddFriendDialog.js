import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Typography from '@mui/material/Typography';
import FormWithLabel from '../../../layout/FormWithLabel';
import CustomPrimaryButton from '../../../layout/CustomPrimaryButton';
import { validateEmail } from '../../../utils/validator';
import { connect } from 'react-redux';
import { getActions } from '../../../../redux/actions/friendsActions';

const AddFriendDialog = ({
    isDialogOpen,
    closeDialogHandler,
    sendFriendInvitation = () => { }
}) => {
    const [email, setEmail] = useState('');
    const [isFormValid, setIsFormValid] = useState('');

    const handleSendInvitation = () => {
        sendFriendInvitation({ targetedEmail: email.toLowerCase() }, handleCloseDialog);
    }

    const handleCloseDialog = () => {
        closeDialogHandler();
        setEmail('');
    }

    useEffect(() => {
        setIsFormValid(validateEmail(email));
    }, [email, setIsFormValid]);

    return (
        <div>
            <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
                <DialogTitle>
                    <Typography>Invite a Friend</Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography>
                            Enter email address of your friend whom you would like to invite
                        </Typography>
                    </DialogContentText>
                    <FormWithLabel
                        label="Enter email address"
                        type="email"
                        value={email}
                        setValue={setEmail}
                        placeholder="Enter email address"
                    />
                </DialogContent>
                <DialogActions>
                    <CustomPrimaryButton
                        label="Send"
                        onClick={handleSendInvitation}
                        disabled={!isFormValid}
                        additionalStyles={{
                            margin: '0 15px 10px 15px',
                        }}
                    />
                </DialogActions>
            </Dialog>
        </div>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    }
}

export default connect(null, mapActionsToProps)(AddFriendDialog);