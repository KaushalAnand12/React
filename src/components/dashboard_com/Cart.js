import React, { useState } from 'react';
import { Box, Typography, Button, IconButton, Drawer, Grid, CardMedia } from '@mui/material';
import { useCart } from './CartContext';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Cart = () => {
  const { state, dispatch } = useCart();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleRemoveFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  const handleQuantityChange = (product, quantity) => {
    if (quantity > 0) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { ...product, quantity } });
    } else {
      handleRemoveFromCart(product);
    }
  };

  const calculateTotal = () => {
    return state.items.reduce((total, item) => total + item.quantity * parseFloat(item.price.replace('$', '')), 0).toFixed(2);
  };

  return (
    <Box>
      <IconButton color="primary" onClick={() => setDrawerOpen(true)}>
        <ShoppingCartIcon />
        {state.items.length > 0 && <Box component="span" sx={{ ml: 1 }}>{state.items.length}</Box>}
      </IconButton>
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 350, padding: 2 }}>
          <Typography variant="h6" gutterBottom>
            Shopping Cart
          </Typography>
          {state.items.length === 0 ? (
            <Typography variant="body1">Your cart is empty</Typography>
          ) : (
            state.items.map((item, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <CardMedia component="img" height="50" image={item.image} alt={item.name} />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="body1">{item.name}</Typography>
                    <Typography variant="body2">{item.price}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                      <IconButton size="small" onClick={() => handleQuantityChange(item, item.quantity - 1)}>
                        <RemoveIcon />
                      </IconButton>
                      <Typography variant="body1" sx={{ mx: 1 }}>{item.quantity}</Typography>
                      <IconButton size="small" onClick={() => handleQuantityChange(item, item.quantity + 1)}>
                        <AddIcon />
                      </IconButton>
                    </Box>
                  </Grid>
                </Grid>
                <IconButton color="error" onClick={() => handleRemoveFromCart(item)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))
          )}
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6">Total: ${calculateTotal()}</Typography>
          </Box>
          <Button
                      color="primary"
                      variant="contained"
                      component="a"
                      href="/material-ui/getting-started/templates/sign-up/"
                      target="_blank"
                      sx={{ width: '100%' }}
                    >
                      Proceed to Payment
                    </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Cart;
