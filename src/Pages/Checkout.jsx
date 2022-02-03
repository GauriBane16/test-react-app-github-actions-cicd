import React from "react";
import AddressForm from "../library/components/AddressForm";
import Payment from "../library/components/Payment";
import OrderSummary from "../library/components/OrderSummary";
import Header from "../library/components/Header";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";


export default function CheckoutPage() {
    
  return (
    <Container maxWidth="false" justify="center">
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Grid container columnSpacing={8} item xs zeroMinWidth>
            <Grid item xs={12} sm={6}>
              <OrderSummary />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container rowSpacing={3}>
                <Grid item>
                  <AddressForm />
                </Grid>
                <Grid item>
                  <Payment />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
