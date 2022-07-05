import { sentenceCase } from 'change-case';
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import React, { useEffect } from 'react';
import Label from '../components/Label';
import KpiDC from './KpiDC';

const UserDetail = ({ user, setIsOpen, isOpen }) => {
  const { name, role, status, company, avatarUrl } = user;

  return (
    <Dialog open={isOpen} fullScreen onClose={() => setIsOpen(false)}>
      <DialogTitle>
        <Box display="flex" alignItems="center">
          <Avatar alt={name} src={avatarUrl} />
          <Typography marginLeft="20px" variant="h3">
            {name}
          </Typography>
        </Box>

        <IconButton
          aria-label="close"
          onClick={() => setIsOpen(false)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box display="flex" mb={2}>
          Vai trò:
          <Typography marginLeft={1} fontWeight="bold">{`${role}`}</Typography>
        </Box>
        <Box display="flex" mb={2}>
          Trạng thái:
          <Label
            marginLeft={1}
            variant="ghost"
            color={(status === 'banned' && 'error') || 'success'}
          >
            {sentenceCase(status)}
          </Label>
        </Box>
        <Box display="flex" mb={2}>
          Chi nhánh làm việc:
          <Typography marginLeft={1}>{`${company}`}</Typography>
        </Box>
        <KpiDC />
      </DialogContent>

      <DialogActions>
        <Button onClick={() => setIsOpen(false)}>OK</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserDetail;
