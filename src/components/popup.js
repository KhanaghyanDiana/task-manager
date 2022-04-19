import React from "react"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import "./component.css"
export const PopUp = (props) => {
    const { handleClose, content, open } = props


    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {content}
            </DialogTitle>

            <DialogActions>
                <Button onClick={handleClose} className="close-btn">Close</Button>
                <Button className="save-btn" onClick={handleClose} autoFocus>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    )
}