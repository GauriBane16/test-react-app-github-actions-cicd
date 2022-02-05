import Grid from "@mui/material/Grid";
import SummaryCard from "./SummaryCard";
// import '../../App.css'
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { TableBody } from "@mui/material";

export default function OrderDetailsByID() {
  const data = useSelector((state) => state);
  console.log("data",data)
  const productList = data.cartReducer.products;
  console.log("productList",productList)
//   const paymentInfo = data.cartReducer.paymentInfo;
//   const today=new Date();
//   const tomorrow=new Date(today.setDate(today.getDate()+1)).toDateString();
// console.log("today",today)
  return (
    <Grid container rowSpacing={5}  sx={{border:'2px solid #EBEBEB', padding:'5px'}}>
      <Grid item xs={12} fullWidth>
        <Grid container spacing={1} fullWidth>
        </Grid>
      </Grid>
      <Grid item fullwidth={1}>
        <Grid
          container
          className="example"
          spacing={5}
        >
         
          {productList && productList.length != 0
            ? productList.map((element, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <SummaryCard product={element}></SummaryCard>
                </Grid>
              ))
            : ""}
        </Grid>
      </Grid>
    
    </Grid>
  );
}
