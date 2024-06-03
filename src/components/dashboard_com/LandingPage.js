import React, { useState } from 'react';
import { alpha } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from './AppAppBar';
import Hero from './Hero';
import Highlights from './Highlights';
import Features from './Features';
import Footer from './Footer';
import getLPTheme from './GetLpThem';
import ProductPage from './ProductPage';
import AddProduct from './AddProduct'; 

const initialProducts = [
  {
    name: 'H&M Denim jacket',
    price: '$15',
    image: 'https://images-cdn.ubuy.co.in/635679392e336a1a0363eaf3-lapus-girl-with-style-denim-jacket.jpg'
  },
  {
    name: 'Braided-belt trousers',
    price: '$20',
    image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F69%2F88%2F698803bef677879ef70485d9a50d9e7d6778a7ee.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
  },
  {
    name: 'PRINTED TOP WITH GUIPURE SLEEVES',
    price: '$13',
    image: 'https://static.zara.net/assets/public/3eac/3cab/5f044e9eb76a/e5af91ba0efc/03564106330-a1/03564106330-a1.jpg?ts=1716479868906&w=563'
  },
  {
    name: 'MEDIUM STRAW TOTE WITH GUCCI PATCH',
    price: '$20',
    image: 'https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1713167142/779530_9AAE9_9541_003_100_0000_Light-Medium-straw-tote-with-Gucci-patch.jpg'
  },
  {
    name: 'Linen-blend pull-on trousers',
    price: '$50',
    image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5c%2F6c%2F5c6c70c119c6c67e8aa43684d262ddb8cc1d7bf9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
  },
  {
    name: 'SHORT LINEN PLAYSUIT',
    price: '$45',
    image: 'https://static.zara.net/assets/public/8b94/2a52/869146f1bebe/965f19fbb8f6/03496817620-p/03496817620-p.jpg?ts=1716479869681&w=563'
  },
  {
    name: 'LINEN-BLEND FLORAL PRINT MIDI DRESS',
    price: '$35',
    image: 'https://static.zara.net/assets/public/fcaf/8380/2f83459daf01/e2da21f38c5e/03213740330-e1/03213740330-e1.jpg?ts=1712135163910&w=563'
  },
  {
    name: 'WOMEN HORSEBIT SLINGBACK PUMP',
    price: '$50',
    image: 'https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1706117543/782627_2HK80_4041_003_100_0000_Light-Womens-Horsebit-slingback-pump.jpg'
  },
  {
    name: 'SHORT DRESS WITH CONTRAST EMBROIDERY',
    price: '$26',
    image: 'https://static.zara.net/assets/public/c6bb/5cdf/f07d44cc97b1/58a763707fab/05770042712-p/05770042712-p.jpg?ts=1713953861343&w=563'
  },
  {
    name: 'HALTER CROP TOP WITH EMBROIDERY',
    price: '$65',
    image: 'https://static.zara.net/assets/public/6a37/2cb0/37a94ac8ba3f/7db9bfa65e93/01821031093-p/01821031093-p.jpg?ts=1714036551252&w=563'
  },
  {
    name: 'WOMENS HORSEBIT FLATFORM SANDAL',
    price: '$110',
    image: 'https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1713373350/794718_2HK80_9741_003_100_0000_Light-Womens-Horsebit-flatform-sandal.jpg'
  },
  {
    name: 'Frill-trimmed muslin blouse',
    price: '$45',
    image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F87%2F61%2F8761a4114f79613d31c8b7f19e67f937f8bb0ecc.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
  },
  {
    name: 'WOMENS GUCCI RE-WEB SNEAKER',
    price: '$120',
    image: 'https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1710927992/785452_AADHW_9571_003_100_0000_Light-Womens-Gucci-Re-Web-sneaker.jpg'
  }
];

function LandingPage() {
  const [mode, setMode] = useState('light');
  const [showCustomTheme, setShowCustomTheme] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [products, setProducts] = useState(initialProducts);

  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleAddProductClick = () => {
    setShowAddProduct(true);
  };

  const handleAddProductClose = () => {
    setShowAddProduct(false);
  };

  const handleSaveProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
    setShowAddProduct(false);
  };

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar 
        mode={mode} 
        toggleColorMode={toggleColorMode} 
        handleSearch={handleSearch} 
      />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: 'center',
            width: '100%',
            marginTop: { xs: 0, sm: 0 },
            display: 'flex',
            backgroundImage:
              theme.palette.mode === 'light'
                ? 'url("/static/images/templates/templates-images/hero-light.png")'
                : 'url("/static/images/templates/templates-images/hero-dark.png")',
            backgroundSize: 'cover',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor:
              theme.palette.mode === 'light'
                ? alpha('#BFCCD9', 0.5)
                : alpha('#9CCCFC', 0.1),
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
          })}
        >
          <ProductPage products={products} searchQuery={searchQuery} />
        </Box>
        <Features />
        <Divider />
        <Highlights />
        <Divider />
        <Footer />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          position: 'fixed',
          bottom: 24,
          zIndex: 1000,
        }}
      >
        <button
          onClick={handleAddProductClick}
          style={{
            marginTop: '8px',
            padding: '10px 20px',
            backgroundColor: '#3f51b5',
            color: '#ffffff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            position: 'fixed',
            bottom: '30px',
            zIndex: 1001,
          }}
        >
          Add Product
        </button>
      </Box>
      {showAddProduct && <AddProduct onClose={handleAddProductClose} onSave={handleSaveProduct} />}
    </ThemeProvider>
  );
}

export default LandingPage;
