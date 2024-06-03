import React from 'react';
import { Box, Button, Grid, Typography, Card, CardContent, CardMedia, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useCart } from './CartContext';

const StyledCard = styled(Card)({
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
    },
    border: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%', 
  });
  
  const ProductPage = ({ products, searchQuery }) => {
    const { dispatch } = useCart();
  
    const handleAddToCart = (product) => {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    };
  
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <Box sx={{ padding: 4 }}>
        <Grid container spacing={4}>
          {filteredProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={index} sx={{ display: 'flex' }}>
              <StyledCard>
                <CardMedia
                  component="img"
                //   height="150"
                  image={product.image}
                  alt={product.name}
                  sx={{ objectFit: 'cover' }}  // Ensures the image fits well within the specified height
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: '14px' }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() => handleAddToCart(product)}
                    sx={{ mt: 'auto' }}  // Pushes the button to the bottom
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };
  
  export default ProductPage;
