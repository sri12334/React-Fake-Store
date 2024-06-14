// Item.jsx
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const Item = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto' }}>
      <CardMedia
        component="img"
        height="200"
        image={item.images[0]}
        alt={item.title}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${item.price}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {item.description}
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          sx={{ mt: 2 }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
};

export default Item;

