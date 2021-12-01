import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Fragment } from 'react';

export default function SimpleSnackbar({ open, handleClose }) {

    const action = (
        <Fragment>
            {/* <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button> */}
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </Fragment>
    );

    return (
        <div>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Article Deleted"
                action={action}
            />
        </div>
    );
}