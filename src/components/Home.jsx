// Home.jsx
import { Container, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Container sx={{ mt: 4, textAlign: 'center' }}>
      <Box 
        sx={{ 
          bgcolor: '#f0f0f0', 
          p: 4, 
          borderRadius: 2, 
          boxShadow: 3, 
          maxWidth: 600, 
          margin: 'auto' 
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Our Website
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          repellendus possimus quos illo, voluptas debitis similique molestias
          hic sint exercitationem. Ipsum voluptate mollitia magnam architecto
          aperiam facilis quos omnis doloremque.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
