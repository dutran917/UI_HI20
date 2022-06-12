import { useState } from 'react';
// material
import { Button, Container, Stack, Typography } from '@mui/material';
// components

import Page from '../components/Page';
import { ProductListDC } from '../sections/@dashboard/products';

import PRODUCTS from '../_mock/products';

// ----------------------------------------------------------------------

export default function ProductDC() {
  const [products, setProducts] = useState(PRODUCTS);
  return (
    <Page title="Dashboard: Products">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Danh sách bài đăng
        </Typography>
        <ProductListDC products={products} />
        {/* <ProductCartWidget /> */}
      </Container>
    </Page>
  );
}
