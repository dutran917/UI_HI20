import { Menu, MenuItem, MenuList, Paper } from '@mui/material';
import { useState } from 'react';

// material

export default function ProductFilterSidebar({ setActive }) {
  const style = {
    display: 'flex',
  };
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onSelected = (e, index) => {
    setSelectedIndex(index);
  };
  const menus = [
    {
      active: true,
      label: 'Danh sách BĐS trên hệ thống',
    },
    {
      active: false,
      label: 'Danh sách BĐS chưa duyệt ',
    },
  ];
  return (
    <Paper elevation={4}>
      <MenuList style={style} variant="menu">
        {menus.map((item, index) => (
          <MenuItem
            key={item.id}
            selected={index === selectedIndex}
            onClick={(e) => {
              onSelected(e, index);
              setActive(item.active);
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
}
