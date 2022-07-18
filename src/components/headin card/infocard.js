import { Fade, Slide } from "react-reveal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./infocard.css";

export default function InfoCard({name,des,img}) {

  return (
    <Grid
      id="ourhotels"
      container
      sx={{
        height: 800,
        marginTop: 10,
        marginBottom: 3,
        display: "flex",
        position: "relative",
        flexDirection: "column",
      }}
    >
      <Grid
        item
        sx={{
          height: 200,
          marginTop: 10,
          position: "relative",
          paddingRight: 0,
          paddingLeft: 2,
        }}
      >
        <>
          <div className="card" sx={{ width: 200 }} align="center">
            <Slide left duration={1500}>
              {/*heading above line*/}
              <Typography variant="h3">{name}</Typography>
            </Slide>

            {/*horizontal line*/}
            <Slide right duration={2000}>
              <div className="card-border"></div>
            </Slide>
          </div>
          {/*descriptioin below line*/}
          <Grid>
          <Fade left duration={2000}>
            <Typography
              width="680px"
              variant="h4"
              align="center"
              sx={{ position: "absolute", left: 100, top: 10 }}
            >
              {des}
            </Typography>
          </Fade></Grid>
        </>
      </Grid>

      {/*image*/}
      <Grid item xs={2.88} sx={{ height: "100%" }}>
        <Fade duration={1000}>
          <Box
            component="img"
            sx={{ paddingTop: 7, height: 740, width: 990 }}
            alt="The house from the offer."
            src={img}
          />
        </Fade>
      </Grid>
    </Grid>
  );
}
