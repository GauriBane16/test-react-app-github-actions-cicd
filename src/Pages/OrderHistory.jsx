import Container from "@mui/material/Container";
import Header from "../library/components/Header";
import OrderGrid from "../library/components/OrderGrid";
import orders from "../services/orders";
import Grid from "@mui/material/Grid";
const OrderHistory = () => {
  return (
    <Container maxWidth="false">
      <Grid container rowSpacing={10}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <OrderGrid values={orders} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default OrderHistory;
