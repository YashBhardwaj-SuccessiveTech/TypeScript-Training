// 11.Design a modal dialog component using Material-UI's Dialog component. 
// Use it to display additional information or capture user input within your app.

"use client";

import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  TextField,
} from '@mui/material';

function ModalDialog() {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    alert(`You entered: ${inputValue}`);
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Open Modal
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter Some Information</DialogTitle>

        <DialogContent>
          <Typography variant="body2" gutterBottom>
            Please enter your name below:
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            label="Your Name"
            fullWidth
            variant="outlined"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ModalDialog;
