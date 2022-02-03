import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function AddressForm(){

    return (
        
        <Grid container spacing={5}>
            <Grid item>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <h2 style={{margin:'0',padding:'0'}}>Billing Info</h2>
                    </Grid>
                    <Grid item xs={12}>
                        <p style={{color:"#C1C1C1",margin:'0',padding:'0'}}>Please enter your billing info</p>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
            <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={6} lg={6}      fullwidth={1}>
                    <TextField id="outlined-basic" label="First name" variant="outlined" fullwidth={1}/>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}      fullwidth={1}>
                    <TextField id="outlined-basic" label="Last name" variant="outlined" fullwidth={1}/>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}      fullwidth={1}>
                    <TextField id="outlined-basic" label="Email address" variant="outlined" fullwidth={1}/>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}      fullwidth={1}>
                    <TextField id="outlined-basic" label="Phone number" variant="outlined" fullwidth={1}/>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}      fullwidth={1}>
                    <TextField id="outlined-basic" label="Address" variant="outlined" fullwidth={1}/>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}      fullwidth={1}>
                    <TextField id="outlined-basic" label="Town/City" variant="outlined" fullwidth={1}/>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}      fullwidth={1}>
                    <TextField id="outlined-basic" label="State/Country" variant="outlined" fullwidth={1}/>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}      fullwidth={1}>
                    <TextField id="outlined-basic" label="Zip/Postal code" variant="outlined" fullwidth={1}/>
            </Grid>

        </Grid>

            </Grid>
        </Grid>
            )
}