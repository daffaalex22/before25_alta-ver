import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';


const DeleteDialog = ({ open, handleClose, handleOpenSnackbar }) => {
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Delete This Article? *This Action CANNOT be Undone!"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        You are going to permanently delete this article.
                        Confirmation from Head of Content Division should be conducted first.
                        If u're not sure why this stuff is popping up, select 'Cancel'
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleOpenSnackbar}
                        autoFocus
                    >
                        Delete Forever
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DeleteDialog;