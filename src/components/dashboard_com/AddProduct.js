import React, { useState, useRef, useEffect } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)({
  position: 'fixed',
  top: 'calc(69% - 150px)',
  right: 'calc(42% - 100px)', 
  zIndex: 1000,
  backgroundColor: '#ffffff',
  padding: '20px',
  width:'30%',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
  },
});

const AddProduct = ({ onClose, onSave }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('');
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleSave = () => {
    onSave({ name: productName, price: productPrice, image: productImage });
    setProductName('');
    setProductPrice('');
    setProductImage('');
  };

  return (
    <StyledBox ref={ref}>
      <TextField
        label="Product Name"
        variant="outlined"
        fullWidth
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Product Price"
        variant="outlined"
        fullWidth
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value.replace(/[^0-9]/g, ''))}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Product Image URL"
        variant="outlined"
        fullWidth
        value={productImage}
        onChange={(e) => setProductImage(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSave}
      >
        Save
      </Button>
    </StyledBox>
  );
};

export default AddProduct;
