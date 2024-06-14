/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { Grid, Container, Typography } from "@mui/material";
import Loading from "./Loading";
import getProducts from "../apis/getProducts";
import Item from "./Item";

const furniture = () => {
  const [furniture, setFurniture] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFurniture = async () => {
      try {
        const furnitureData = await getProducts("furniture");
        setFurniture(furnitureData.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFurniture();
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      {loading && <Loading />}
      {error && <Typography variant="body1" color="error">{error}</Typography>}
      {furniture.length === 0 && !loading && (
        <Typography variant="body1">No furniture exists</Typography>
      )}
      {furniture.length > 0 && (
        <Grid container spacing={3} >
          {furniture.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Item item={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default furniture;
