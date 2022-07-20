import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import {
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
// component
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

export default function UserMoreMenu({
  setUserList,
  userList,
  user,
  setIsOpenKPI,
}) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const changeStatus = (user) => {
    const newArr = userList.map((item) => {
      if (item.id === user.id) {
        if (item.status === 'active') {
          item.status = 'banned';
        } else {
          item.status = 'active';
        }
        console.log(item);
      }
      return item;
    });
    return newArr;
  };
  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Iconify icon="eva:more-vertical-fill" width={20} height={20} />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' },
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem
          sx={{ color: 'text.secondary' }}
          onClick={() => {
            setIsOpen(false);
            setUserList(changeStatus(user));
          }}
        >
          <ListItemIcon>
            <Iconify icon="fa:ban" width={24} height={24} />
          </ListItemIcon>
          <ListItemText
            primary={user.status === 'active' ? 'Block người dùng' : 'Gỡ Block'}
            primaryTypographyProps={{ variant: 'body2' }}
          />
        </MenuItem>

        <MenuItem
          component={RouterLink}
          to="#"
          sx={{ color: 'text.secondary' }}
          onClick={() => {
            setIsOpenKPI(true);
            setIsOpen(false);
          }}
        >
          <ListItemIcon>
            <Iconify icon="eva:edit-fill" width={24} height={24} />
          </ListItemIcon>
          <ListItemText
            primary="Giao KPI"
            primaryTypographyProps={{ variant: 'body2' }}
          />
        </MenuItem>
      </Menu>
    </>
  );
}
