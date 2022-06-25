import { Fade, Slide } from "react-reveal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./palace.css";
import { height } from "@mui/system";

export default function Palace() {
  return (
    <Grid container direction={"row"} sx={{ height: 800, marginTop: 3,marginBottom:3 }}>

      {/*image*/}
      <Grid item xs={4.5} sx={{ height: "100%"}}>
        <Fade left duration={1000}>
          <Box
            component="img"
            sx={{
              height:800,
              width:1000
            }}
            alt="The house from the offer."
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
          />
        </Fade>
      </Grid>

      {/*about that
      <Box sx={{ marginTop:8, width:500 }}  >
        <Typography variant="h4" component="h6">
          Pradeep Palace 
        <Typography variant="h5"  marginTop={5} sx={{wordWrap:"break-word",display:"block"}}>
        asdfkajsdnfklajdiashdfkljasdbhklfjasdjfhaskldjfhaklsdjfhklasdfhklasdjfhklasdjf
        </Typography>
        </Typography>
      </Box>

      {/*vertical line*/}
      <Grid item xs={0.5}  marginLeft="350px">
        <Slide right duration={2000}>
          <div className="vl"></div>
        </Slide>
      </Grid>

      {/*horizontal line*/}
      <Grid item sx={{ height: 600 }} xs={3}>
        <Slide right duration={2000}>
          <h1 className="card">hi</h1>
          <div className="card-border"></div>
        </Slide>
      </Grid>

    </Grid>
  );
}
