// material

import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import ShopProductCard from './ProductCard';

// ----------------------------------------------------------------------

export default function ProductList({ products, active, ...other }) {
  const [list, setList] = useState([]);
  useEffect(() => {
    console.log(active, products, list);
    if (active) {
      setList(products.filter((item) => item.active === true));
    } else {
      setList(products.filter((item) => item.active === false));
    }
  }, [active]);
  return (
    <>
      <Grid container spacing={3} {...other}>
        {active
          ? list.map((product) => (
              <Grid key={product.id} item xs={12}>
                <ShopProductCard product={product} />
              </Grid>
            ))
          : list.map((product) => (
              <Grid key={product.id} item xs={12}>
                <ShopProductCard product={product} />
              </Grid>
            ))}
      </Grid>
    </>
  );
}
