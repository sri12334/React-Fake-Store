import { useState } from 'react';
import { Typography, Button, Container, Grid, Card, CardContent, CardActions } from '@mui/material';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1">
          Your shopping cart is empty.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {cartItems.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <Typography variant="h6" color="text.primary">
                    ${item.price.toFixed(2)}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => handleRemoveItem(item.id)}>
                    Remove
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Cart;

