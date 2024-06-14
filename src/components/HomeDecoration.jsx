// Food.jsx
import { useEffect, useState } from "react";
import { Grid, Container, Typography } from "@mui/material";
import Loading from "./Loading";
import getProducts from "../apis/getProducts";
import Item from "./Item";

const Food = () => {
  const [homeDecoration, setHomeDecoration] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const homeDecorationData = await getProducts("home-decoration");
        setHomeDecoration(homeDecorationData.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFood();
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      {loading && <Loading />}
      {error && <Typography variant="body1" color="error">{error}</Typography>}
      {homeDecoration.length === 0 && !loading && (
        <Typography variant="body1">No food exists</Typography>
      )}
      {homeDecoration.length > 0 && (
        <Grid container spacing={3} >
          {homeDecoration.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Item item={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Food;
