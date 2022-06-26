import { Fade, Slide } from "react-reveal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./deatailcard.css";

export default function DeatailCard({ name, des1 }) {
  return (
    <Grid
      container
      sx={{
        height: 800,
        marginTop: 3,
        marginBottom: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/*image*/}
      <Grid item xs={5} sx={{ height: "100%" }}>
        <Fade up duration={1000}>
          <Box
            component="img"
            sx={{
              height: 800,
              width: 1000,
            }}
            alt="The house from the offer."
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
          />
        </Fade>
      </Grid>

      {/*vertical line*/}

      <Grid item positon="fixed" sx={{ paddingLeft: 30 }}>
        <Fade duration={2500}>
        <Slide left duration={1000}>
          <div className="vl"></div>
        </Slide></Fade>
      </Grid>
      {/*details*/}
     
      <Grid
        item
        sx={{
          height: 200,
          width:"auto",
          marginTop: 3,
          position: "static",
          paddingRight: 0,
          paddingLeft: 2,
        }}
      >
        {name.map((name, index) => {
          return (
            <>
              <div className="card" sx={{ width: 200,marginBottom:0 }}>
                <Slide left duration={1500}>
                  {/*heading above line*/}
                  <Typography key={index} variant="h4">
                    {name}
                  </Typography>
                  {/*descriptioin above line*/}
                  <Typography width="540px">{des1[index]}</Typography>
                </Slide>
              </div>
              {/*horizontal line*/}
              <Slide right duration={2000}>
                <div className="card-border"></div>
              </Slide>
            </>
          );
        })}
      </Grid>
    </Grid>
  );
}
