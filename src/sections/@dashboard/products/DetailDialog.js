import { Box, Paper, Typography, Dialog, DialogTitle, IconButton, Button } from '@mui/material';
import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CloseIcon from '@mui/icons-material/Close';

const DetailDialog = ({ isOpen, handleClose, product }) => {
  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth="md" sx={{ m: 0, p: 5 }}>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        {product.title}
        <IconButton
          onClick={handleClose}
          aria-label="close"
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Box>
        <ImageList sx={{ p: 5 }} cols={3} rowHeight={500}>
          {product.imageSrc.map((item) => (
            <ImageListItem key={item}>
              <img
                src={`${item}?w=300&fit=crop&auto=format`}
                srcSet={`${item}?w=300&fit=crop&auto=format&dpr=2 2x`}
                alt="img"
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4">{product.title}</Typography>
        <Box display="flex" justifyContent="space-around" alignItems="center">
          <Typography variant="h5">{`Giá: ${product.price}`}</Typography>
          <Typography variant="h5">{`Diện tích: ${product.area}`}</Typography>
          <Typography variant="h5">{`Số phòng: ${product.room}`}</Typography>
        </Box>
        <br />
        <br />
        <br />

        <Typography>{product.detail}</Typography>
        {!product.active && (
          <Button
            onClick={() => {
              product.active = true;
              handleClose();
            }}
          >
            Duyệt bài
          </Button>
        )}
      </Box>
    </Dialog>
  );
};

export default DetailDialog;
