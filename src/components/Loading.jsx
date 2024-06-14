import { CircularProgress, Typography, Box } from '@mui/material';

const Loading = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Box>
        <CircularProgress color="primary" />
        <Typography variant="h6" color="textSecondary" mt={2}>
          Loading...
        </Typography>
      </Box>
    </Box>
  );
};

export default Loading;