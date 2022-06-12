// material

import {
  Box,
  TextField,
  Grid,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

import ShopProductCard from './ProductCard';

// ----------------------------------------------------------------------

export default function ProductListDC({ products, ...other }) {
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box width="60%">
          <TextField
            margin="dense"
            id="name"
            label="Tìm kiếm..."
            type="search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            fullWidth
            autoComplete="off"
            variant="standard"
          />
        </Box>
        <Box display="flex" width="38%">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Giá</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem> 1-3 tỷ </MenuItem>
              <MenuItem>3-5 tỷ</MenuItem>
              <MenuItem>trên 5 tỷ</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Diện tích</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem> 30-50 m2 </MenuItem>
              <MenuItem>50-100 m2</MenuItem>
              <MenuItem>100-200 m2</MenuItem>
              <MenuItem>trên 200m2</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Số phòng ngủ</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem> 2PN </MenuItem>
              <MenuItem>3PN</MenuItem>
              <MenuItem>4PN</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Grid container spacing={3} {...other}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12}>
            <ShopProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
