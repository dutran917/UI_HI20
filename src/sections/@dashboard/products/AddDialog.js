import {
  Typography,
  Dialog,
  DialogTitle,
  Button,
  TextField,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
} from '@mui/material';
import React from 'react';

const AddDialog = ({ isOpen, handleClose }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      sx={{ m: 0, p: 5 }}
    >
      <DialogTitle>Đăng bài</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Bạn hãy nhập những thông tin chi tiết về bài đăng
        </DialogContentText>
        <TextField
          margin="dense"
          id="name"
          label="Tiêu đề"
          type="text"
          fullWidth
          autoComplete="off"
          variant="standard"
        />
        <TextField
          margin="dense"
          id="name"
          label="Địa chỉ"
          type="text"
          fullWidth
          autoComplete="off"
          variant="standard"
        />
        <Grid container spacing={2} marginTop={1}>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              id="name"
              label="Giá"
              type="text"
              fullWidth
              autoComplete="off"
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              id="name"
              label="Diện tích"
              type="text"
              fullWidth
              autoComplete="off"
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              id="name"
              label="Số phòng ngủ"
              type="text"
              fullWidth
              autoComplete="off"
              variant="standard"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} marginTop={1}>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              id="name"
              label="URL Ảnh 1"
              type="text"
              autoComplete="off"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              id="name"
              label="URL Ảnh 2"
              type="text"
              autoComplete="off"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              id="name"
              label="URL Ảnh 3"
              type="text"
              autoComplete="off"
              variant="standard"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Đăng</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddDialog;
