import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { PiStorefrontDuotone } from "react-icons/pi";
import { GiShoppingCart } from "react-icons/gi";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#134967' }}>
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
          <PiStorefrontDuotone />Fake Store
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              color="inherit"
              component={NavLink}
              to="/"
              sx={{
                color: activeButton === 'home' ? 'red' : 'inherit',
                '&:focus': { color: 'red' },
                '&:hover': { backgroundColor: 'transparent' }
              }}
              onClick={() => handleButtonClick('home')}
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={NavLink}
              to="/food"
              sx={{
                color: activeButton === 'about' ? 'red' : 'inherit',
                '&:focus': { color: 'red' },
                '&:hover': { backgroundColor: 'transparent' }
              }}
              onClick={() => handleButtonClick('food')}
            >
              Food
            </Button>
            <Button
              color="inherit"
              component={NavLink}
              to="/furniture"
              sx={{
                color: activeButton === 'about' ? 'red' : 'inherit',
                '&:focus': { color: 'red' },
                '&:hover': { backgroundColor: 'transparent' }
              }}
              onClick={() => handleButtonClick('furniture')}
            >
              Furniture
            </Button>
            <Button
              color="inherit"
              component={NavLink}
              to="/homeDecoration"
              sx={{
                color: activeButton === 'about' ? 'red' : 'inherit',
                '&:focus': { color: 'red' },
                '&:hover': { backgroundColor: 'transparent' }
              }}
              onClick={() => handleButtonClick('homeDecoration')}
            >
              HomeDecoration
            </Button>
            <Button
              color="inherit"
              component={NavLink}
              to="/cart"
              sx={{
                color: activeButton === 'about' ? 'red' : 'inherit',
                '&:focus': { color: 'red' },
                '&:hover': { backgroundColor: 'transparent' },
                fontSize: '2rem'
              }}
              onClick={() => handleButtonClick('cart')}
            >
              <GiShoppingCart />
            </Button>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;