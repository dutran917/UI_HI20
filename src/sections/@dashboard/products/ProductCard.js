import { Box, Paper, Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import PropTypes from 'prop-types';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ product }) {
  return (
    <Paper elevation={6}>
      <Box display="flex" p={2} mt={2}>
        <Box width="30%">
          <ImageList variant="masonry" cols={3} gap={8}>
            {product.imageSrc.map((item) => (
              <ImageListItem key={item}>
                <img
                  src={`${item}?w=248&fit=crop&auto=format`}
                  srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt="img"
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        <Box width="70%">
          <Typography variant="h3">{product.title}</Typography>
          <Box display="flex" justifyContent="space-around" alignItems="center">
            <Typography variant="h5">{`Giá: ${product.price}`}</Typography>
            <Typography variant="h5">{`Diện tích: ${product.area}`}</Typography>
            <Typography variant="h5">{`Số phòng: ${product.room}`}</Typography>
          </Box>
          <Typography
            sx={{
              marginTop: '20px',
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
            }}
            variant="body1"
          >
            {product.detail}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
