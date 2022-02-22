import React, { useState } from 'react';
import CustomPrimaryButton from '../../../layout/CustomPrimaryButton';
import AddFriendDialog from './AddFriendDialog';

const additionalStyles = {
    marginTop: '10px',
    marginLeft: '5px',
    width: '100%',
    height: '30px',
    background: '#3BA55D',
}

const AddFriendButton = () => {

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleOpenAddFriendDialog = () => {
        setIsDialogOpen(true);
    }

    const handleCloseAddFriendDialog = () => {
        setIsDialogOpen(false);
    }

    return (
        <div>
            <CustomPrimaryButton
                additionalStyles={additionalStyles}
                label="Add Friend"
                onClick={handleOpenAddFriendDialog}
            />
            <AddFriendDialog
                isDialogOpen={isDialogOpen}
                closeDialogHandler={handleCloseAddFriendDialog}
            />
        </div>
    )
}

export default AddFriendButton;