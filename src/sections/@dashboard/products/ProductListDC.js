// material

import { Button, Grid } from '@mui/material';
import { useState } from 'react';
import AddDialog from './AddDialog';
import ShopProductCard from './ProductCard';

// ----------------------------------------------------------------------

export default function ProductListDC({ products, ...other }) {
  const [isOpenAddDialog, setIsOpenAddDialog] = useState(false);
  return (
    <>
      <Grid container spacing={3} {...other}>
        <Button
          style={{ marginLeft: '50px' }}
          onClick={() => setIsOpenAddDialog(true)}
          variant="outlined"
        >
          {' '}
          <h2>Đăng bài</h2>{' '}
        </Button>
        {products.map((product) => (
          <Grid key={product.id} item xs={12}>
            <ShopProductCard product={product} />
          </Grid>
        ))}
        <AddDialog
          isOpen={isOpenAddDialog}
          handleClose={() => setIsOpenAddDialog(false)}
        />
      </Grid>
    </>
  );
}
